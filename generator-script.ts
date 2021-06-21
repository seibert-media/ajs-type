import {AJS} from "./index";

interface Indexable {
	[key: string]: Indexable;
}

type AnalysisResult = ExactResult | MembersResult;

interface ExactResult {
	propName: string;
	type: string;
}

interface MembersResult {
	propName: string;
	memberResults: AnalysisResult[];
}

function analyse(thing: Indexable, name: string): AnalysisResult[] {
	if (thing === null || typeof thing === 'undefined') {
		return [{
			propName: name,
			type: 'any'
		}]
	}
	const analysisResults: AnalysisResult[] = [];
	const memberKeys = Object.keys(thing);
	memberKeys.forEach((memberKey: string) => {
		if (!memberKey.startsWith('_')) {
			const memberValue = thing[memberKey];
			const analysisResult = (() => {
				switch (typeof memberValue) {
					case 'function':
						return analyseFunction(memberValue as any, memberKey);
					case 'object':
						if (Array.isArray(memberValue)) {
							return {
								propName: memberKey,
								type: 'any[]'
							}
						}
						return {
							propName: memberKey,
							memberResults: analyse(memberValue, memberKey)
						};
					default:
						return {
							propName: memberKey,
							type: typeof memberValue
						}
				}
			})();
			analysisResults.push(analysisResult);
		}
	});
	return analysisResults;
}

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

function analyseFunction(f: Function, functionName: string): AnalysisResult {
	const argumentNames = [];
	for (let i = 0; i < f.length; i++) {
		argumentNames.push(ALPHABET[i] + '?: any');
	}
	return {
		propName: functionName,
		type: '(' + argumentNames.join(', ') + ') => any'
	};
}

const INDENTATION_MARK = '  ';
let indentationDepth = 0;

function formatResultsArray(results: AnalysisResult[], name: string): string {
	let result = INDENTATION_MARK.repeat(indentationDepth);
	result += `${name}: {\n`;
	indentationDepth++;
	results.forEach((value) => {
		if (value.propName) {
			let printedValuePropName = value.propName.includes('.') || value.propName.includes('-')
				? `'${value.propName}'`
				: value.propName;
			if ((value as MembersResult).memberResults) {
				result += formatResultsArray((value as MembersResult).memberResults, printedValuePropName)
			} else {
				result += `${INDENTATION_MARK.repeat(indentationDepth)}${printedValuePropName}: ${(value as ExactResult).type};`
			}
			result += '\n';
		}
	});
	indentationDepth--;
	result += `${INDENTATION_MARK.repeat(indentationDepth)}}`;
	return result;
}

const AJS_NAME = 'AJS';
console.log(
	formatResultsArray(
		analyse(
			// @tsignore
			AJS as any,
			AJS_NAME
		),
		AJS_NAME
	)
);
