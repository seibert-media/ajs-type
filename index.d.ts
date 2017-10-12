interface AJSType {
	contextPath: () => any;
	deprecate: {
		fn: (a?: any, b?: any, c?: any) => any;
		construct: (a?: any, b?: any, c?: any) => any;
		css: (a?: any, b?: any) => any;
		prop: (a?: any, b?: any, c?: any) => any;
		obj: (a?: any, b?: any, c?: any) => any;
		propertyDeprecationSupported: boolean;
		getMessageLogger: (a?: any, b?: any) => any;
	}
	version: string;
	preventDefault: (a?: any) => any;
	stopEvent: () => any;
	indexOf: (a?: any, b?: any, c?: any) => any;
	contains: (a?: any, b?: any) => any;
	include: () => any;
	toggleClassName: () => any;
	setVisible: () => any;
	setCurrent: () => any;
	isVisible: () => any;
	isClipped: (a?: any) => any;
	params: {
		isSpaceAdmin: string;
		hasSpaceConfig: string;
		showSpaceWelcomeDialog: boolean;
		useKeyboardShortcuts: boolean;
		discoveredPluginFeatures: string;
		dcdAllowGlobalSearch: boolean;
		keyboardshortcutHash: string;
		teamCalendarsDisplayTimeFormat: string;
		publicSignupPermitted: boolean;
		cqIsAdmin: boolean;
		cqIsAnonymous: boolean;
		isConfluenceAdmin: boolean;
		connectionTimeout: string;
		isNewUser: boolean;
		showDashboardOnboardingDialog: boolean;
		showDashboardOnboardingTips: boolean;
		userCanCreateContent: boolean;
		useWatch: boolean;
		attachmentSourceContentId: string;
		useInlineTasks: boolean;
		heartbeat: boolean;
		actionLocale: string;
		editorPluginResourcePrefix: string;
		existingDraftId: string;
		userWatchingOwnContent: string;
		newPage: boolean;
		contentId: string;
		editorMode: string;
		formName: string;
		autoStart: boolean;
		canAttachFiles: boolean;
		draftId: string;
		sharedDrafts: string;
		minEditorHeight: string;
		draftShareId: string;
		contentType: string;
		versionComment: string;
		draftType: string;
		synchronyToken: string;
		synchronyBaseUrl: string;
		synchronyAppId: string;
		synchronyDarkEnabled: string;
		synchronyExpiry: string;
		useXhrFallback: string;
		maxThumbWidth: string;
		maxThumbHeight: string;
		canSendEmail: boolean;
		isDevMode: boolean;
		draftSaveInterval: string;
		showHiddenUserMacros: boolean;
		isAdmin: boolean;
		'confluence.prefs.editor.disable.autocomplete': boolean;
		'confluence.prefs.editor.disable.autoformat': boolean;
		heartbeatInterval: string;
		contextPath: string;
		baseUrl: string;
		versionNumber: string;
		buildNumber: string;
		remoteUser: string;
		remoteUserKey: string;
		remoteUserHasLicensedAccess: boolean;
		currentUserFullname: string;
		currentUserAvatarUrl: string;
		currentUserAvatarUriReference: string;
		staticResourceUrlPrefix: string;
		globalSettingsAttachmentMaxSize: string;
		userLocale: string;
		enabledDarkFeatures: string;
		atlToken: string;
		confluenceFlavour: string;
		userDatePattern: string;
		'date.format': string;
		canvasStatsUAKey: string;
		pageId: undefined;
	}
	populateParameters: (a?: any) => any;
	error: () => any;
	log: () => any;
	warn: () => any;
	toInit: (a?: any) => any;
	firebug: () => any;
	warnAboutFirebug: () => any;
	clone: (a?: any) => any;
	alphanum: (a?: any, b?: any) => any;
	onTextResize: (a?: any) => any;
	unbindTextResize: (a?: any) => any;
	escape: (a?: any) => any;
	escapeHtml: (a?: any) => any;
	filterBySearch: () => any;
	drawLogo: () => any;
	debounce: (a?: any, b?: any) => any;
	debounceImmediate: (a?: any, b?: any) => any;
	id: (a?: any) => any;
	enable: (a?: any, b?: any) => any;
	inlineHelp: () => any;
	$: (a?: any, b?: any) => any;
	format: (a?: any) => any;
	dim: (a?: any, b?: any) => any;
	undim: () => any;
	dropDown: (a?: any, b?: any) => any;
	I18n: {
		keys: {
		}
		get: (a?: any, b?: any, c?: any) => any;
		load: (a?: any) => any;
		getText: (a?: any, b?: any) => any;
	}
	navigation: (a?: any, b?: any) => any;
	responsiveheader: {
		setup: () => any;
	}
	FocusManager: () => any;
	keyCode: {
		ALT: number;
		BACKSPACE: number;
		CAPS_LOCK: number;
		COMMA: number;
		COMMAND: number;
		COMMAND_LEFT: number;
		COMMAND_RIGHT: number;
		LEFT_SQUARE_BRACKET: number;
		CONTROL: number;
		DELETE: number;
		DOWN: number;
		END: number;
		ENTER: number;
		ESCAPE: number;
		HOME: number;
		INSERT: number;
		LEFT: number;
		MENU: number;
		NUMPAD_ADD: number;
		NUMPAD_DECIMAL: number;
		NUMPAD_DIVIDE: number;
		NUMPAD_ENTER: number;
		NUMPAD_MULTIPLY: number;
		NUMPAD_SUBTRACT: number;
		PAGE_DOWN: number;
		PAGE_UP: number;
		PERIOD: number;
		RIGHT: number;
		SHIFT: number;
		SPACE: number;
		TAB: number;
		UP: number;
		WINDOWS: number;
	}
	layer: (a?: any, b?: any) => any;
	LayerManager: () => any;
	bind: (a?: any, b?: any, c?: any) => any;
	trigger: (a?: any, b?: any) => any;
	unbind: (a?: any, b?: any) => any;
	Dialog: () => any;
	popup: () => any;
	InlineDialog: () => any;
	template: (a?: any) => any;
	messages: {
		setup: () => any;
		makeCloseable: () => any;
		makeFadeout: () => any;
		template: string;
		createMessage: () => any;
		generic: (a?: any, b?: any) => any;
		error: (a?: any, b?: any) => any;
		warning: (a?: any, b?: any) => any;
		info: (a?: any, b?: any) => any;
		success: (a?: any, b?: any) => any;
		hint: (a?: any, b?: any) => any;
	}
	tabs: {
		setup: () => any;
		change: (a?: any) => any;
	}
	whenIType: (a?: any) => any;
	cookie: {
		erase: (a?: any) => any;
		read: (a?: any, b?: any) => any;
		save: (a?: any, b?: any, c?: any) => any;
	}
	Cookie: {
		erase: (a?: any) => any;
		read: (a?: any, b?: any) => any;
		save: (a?: any, b?: any, c?: any) => any;
	}
	flag: (a?: any) => any;
	asBooleanOrString: (a?: any) => any;
	Meta: {
		set: (a?: any, b?: any) => any;
		get: (a?: any) => any;
		getBoolean: (a?: any) => boolean;
		getNumber: (a?: any) => number;
		getAllAsMap: () => {[key: string]: any};
		Links: {
			canonical: () => any;
			shortlink: () => any;
		}
	}
	DarkFeatures: {
		isEnabled: (a?: any) => any;
		enable: (a?: any) => any;
		disable: (a?: any) => any;
		getAllEnabled: () => any;
		remotely: {
			user: {
				enable: (a?: any) => any;
				disable: (a?: any) => any;
			}
		}
	}
	storageManager: (a?: any, b?: any) => any;
	defaultIfUndefined: (a?: any, b?: any) => any;
	debug: () => any;
	debugEnabled: (a?: any) => any;
	logError: (a?: any, b?: any) => any;
	getJSONWrap: (a?: any) => any;
	Validate: {
		email: (a?: any) => any;
		url: (a?: any) => any;
	}
	Data: {
		set: (a?: any, b?: any) => any;
		get: (a?: any) => any;
		getBoolean: (a?: any) => any;
		getNumber: (a?: any) => any;
		getAllAsMap: () => any;
		Links: {
			canonical: () => any;
			shortlink: () => any;
		}
	}
	MessageHandler: (a?: any, b?: any) => any;
	ConfluenceDialog: (a?: any) => any;
	safeHTML: (a?: any) => any;
	REST: {
		getBaseUrl: () => any;
		makeUrl: (a?: any) => any;
		findLink: (a?: any, b?: any, c?: any) => any;
		findSpaceName: (a?: any) => any;
		convertFromRest: (a?: any) => any;
		wikiLink: (a?: any) => any;
		makeRestMatrixFromData: (a?: any, b?: any) => any;
		makeRestMatrixFromSearchData: (a?: any, b?: any) => any;
	}
	Confluence: {
		getContextPath: () => any;
		getBaseUrl: () => any;
		getBuildNumber: () => any;
		getContentId: () => any;
		getXsrfToken: () => any;
		runBinderComponents: () => any;
		placeFocus: () => any;
		unescapeEntities: (a?: any) => any;
		sessionCheck: (a?: any, b?: any) => any;
		sessionFail: (a?: any, b?: any) => any;
		Binder: {
			placeFocus: () => any;
			placeholder: (a?: any) => any;
			inputDefaultText: (a?: any) => any;
			insertOnEvent: () => any;
			autocompleteUserOrGroup: (a?: any) => any;
			autocompleteUser: () => any;
			autocompleteSpace: (a?: any) => any;
			autocompleteAttachment: (a?: any) => any;
			autocompletePage: (a?: any) => any;
			autocompleteBlogpost: (a?: any) => any;
			autocompleteConfluenceContent: (a?: any) => any;
			autocompleteSearch: (a?: any) => any;
			userHover: () => any;
			favourites: () => any;
			watching: () => any;
			autocompleteMultiUser: (a?: any) => any;
		}
		hintManager: (a?: any) => any;
		debugTime: (a?: any) => any;
		debugTimeEnd: (a?: any) => any;
		Defaults: {
			maxResults: number;
		}
		Highlighter: (a?: any, b?: any) => any;
		cacheManager: (a?: any) => any;
		localStorageCacheManager: (a?: any, b?: any) => any;
		storageManager: (a?: any) => any;
		AttachmentUploader: (a?: any, b?: any) => any;
		Templates: {
			Dialog: {
				helpLink: (a?: any, b?: any) => any;
				customHelpLink: (a?: any, b?: any) => any;
				breadcrumbItem: (a?: any, b?: any) => any;
				breadcrumbLoading: (a?: any, b?: any) => any;
				breadcrumbError: (a?: any, b?: any) => any;
			}
			ManageWatchers: {
				dialogContent: (a?: any, b?: any) => any;
				userItem: (a?: any, b?: any) => any;
				helpLink: (a?: any, b?: any) => any;
				addWatcherForm: (a?: any, b?: any) => any;
			}
			Breadcrumbs: {
				render: (a?: any, b?: any) => any;
			}
			Labels: {
				helpLink: (a?: any, b?: any) => any;
				dialog: (a?: any, b?: any) => any;
				nolabels: (a?: any, b?: any) => any;
				dialogLabelList: (a?: any, b?: any) => any;
				dialogLabels: (a?: any, b?: any) => any;
			}
			DomFilterField: {
				form: (a?: any, b?: any) => any;
			}
			Blueprints: {
				createDialogBody: (a?: any, b?: any) => any;
				waitContainer: (a?: any, b?: any) => any;
				waitIcon: (a?: any, b?: any) => any;
				helpLink: (a?: any, b?: any) => any;
				spaceHelpLink: (a?: any, b?: any) => any;
				CreateSpace: {
					createSpaceForm: (a?: any, b?: any) => any;
					createSpaceFormFields: (a?: any, b?: any) => any;
					createPersonalSpaceForm: (a?: any, b?: any) => any;
					spaceFormPermissions: (a?: any, b?: any) => any;
					welcome: (a?: any, b?: any) => any;
				}
				CreateFromTemplate: {
					macroTemplate: (a?: any, b?: any) => any;
				}
			}
			KeyboardShortcutsDialog: {
				Autoformat: {
					configureAutocomplete: (a?: any, b?: any) => any;
					helpItem: (a?: any, b?: any) => any;
					simpleHelpItem: (a?: any, b?: any) => any;
					tableHelpItem: (a?: any, b?: any) => any;
					styleHelpItem: (a?: any, b?: any) => any;
					keyboardShortcutItem: (a?: any, b?: any) => any;
					emoticonHelpItem: (a?: any, b?: any) => any;
					boldDescription: (a?: any, b?: any) => any;
					underlineDescription: (a?: any, b?: any) => any;
					italicDescription: (a?: any, b?: any) => any;
					monospaceDescription: (a?: any, b?: any) => any;
					tableDescription: (a?: any, b?: any) => any;
					tableWithHeadingsDiscriptions: (a?: any, b?: any) => any;
					h1Description: (a?: any, b?: any) => any;
					h3Description: (a?: any, b?: any) => any;
					bqDescription: (a?: any, b?: any) => any;
					numberedListDescription: (a?: any, b?: any) => any;
					bulletedListDescription: (a?: any, b?: any) => any;
					inlineTaskListDescription: (a?: any, b?: any) => any;
				}
				keyboardShortcutModule: (a?: any, b?: any) => any;
				keyboardShortcutEnabledCheckbox: (a?: any, b?: any) => any;
				keyboardShortcutPanel: (a?: any, b?: any) => any;
			}
			Hipchat: {
				Discovery: {
					integrationDialog: (a?: any, b?: any) => any;
				}
			}
			HipChat: {
				Presence: {
					badge: (a?: any, b?: any) => any;
					chatBar: (a?: any, b?: any) => any;
				}
			}
			GettingStarted: {
				popularTabEmpty: (a?: any, b?: any) => any;
			}
			User: {
				userLinkUrl: (a?: any, b?: any) => any;
				logo: (a?: any, b?: any) => any;
				usernameLink: (a?: any, b?: any) => any;
				fullNameOrAnonymous: (a?: any, b?: any) => any;
				usernameOrAnonymous: (a?: any, b?: any) => any;
			}
			Icons: {
				contentIcon: (a?: any, b?: any) => any;
				contentIconFont: (a?: any, b?: any) => any;
				iconSpan: (a?: any, b?: any) => any;
			}
			Captcha: {
				form: (a?: any, b?: any) => any;
				image: (a?: any, b?: any) => any;
			}
			Notifications: {
				notLoggedIn: (a?: any, b?: any) => any;
				actionErrors: (a?: any, b?: any) => any;
			}
			Share: {
				Dialog: {
					shareContentPopup: (a?: any, b?: any) => any;
					recipientUser: (a?: any, b?: any) => any;
					recipientEmail: (a?: any, b?: any) => any;
					recipientGroup: (a?: any, b?: any) => any;
				}
			}
			AddPagetree: {
				addPageTreeDialog: (a?: any, b?: any) => any;
			}
			AddPagetreePre510: {
				addPageTreeDialog: (a?: any, b?: any) => any;
			}
			ConfigureGitAttachment: {
				dialogContent: (a?: any, b?: any) => any;
			}
			LinkBrowser: {
				gitattachmentPanel: (a?: any, b?: any) => any;
				searchPanel: (a?: any, b?: any) => any;
				recentlyviewedPanel: (a?: any, b?: any) => any;
				attachmentsPanel: (a?: any, b?: any) => any;
				weblinkPanel: (a?: any, b?: any) => any;
				advancedPanel: (a?: any, b?: any) => any;
				locationPanel: (a?: any, b?: any) => any;
				helpLink: (a?: any, b?: any) => any;
			}
			File: {
				fileDialogListItem: (a?: any, b?: any) => any;
				fileDialogListItemPlaceHolder: (a?: any, b?: any) => any;
				uploadFileForm: (a?: any, b?: any) => any;
				attachedFilesPanel: (a?: any, b?: any) => any;
				webPanel: (a?: any, b?: any) => any;
				searchPanel: (a?: any, b?: any) => any;
				helpLink: (a?: any, b?: any) => any;
			}
			MacroBrowser: {
				CQL: {
					sections: (a?: any, b?: any) => any;
				}
				macroSummaryList: (a?: any, b?: any) => any;
				macroSummaryItem: (a?: any, b?: any) => any;
				macroDescription: (a?: any, b?: any) => any;
				insertMacroPanel: (a?: any, b?: any) => any;
				missingUserMacroMetadataPanel: (a?: any, b?: any) => any;
				macroParameter: (a?: any, b?: any) => any;
				macroParameterBoolean: (a?: any, b?: any) => any;
				macroParameterSelect: (a?: any, b?: any) => any;
				macroParameterHidden: (a?: any, b?: any) => any;
				macroParameterDesc: (a?: any, b?: any) => any;
				macroBody: (a?: any, b?: any) => any;
				helpLink: (a?: any, b?: any) => any;
				gadgetLink: (a?: any, b?: any) => any;
			}
			pageLoadingIndicator: (a?: any, b?: any) => any;
			InsertWiki: {
				originalDefaultTempWikiMarkupDialog: (a?: any, b?: any) => any;
				previewWikiIframeContent: (a?: any, b?: any) => any;
				wikiMarkupDialog: (a?: any, b?: any) => any;
				wikiErrorSubDialog: (a?: any, b?: any) => any;
				wikiParserSelector: (a?: any, b?: any) => any;
			}
			Editor: {
				Page: {
					saveButton: (a?: any, b?: any) => any;
					saveButtonTitle: (a?: any, b?: any) => any;
					saveButtonText: (a?: any, b?: any) => any;
					cancelButton: (a?: any, b?: any) => any;
					quitDialogHeader: (a?: any, b?: any) => any;
					quitDialogContent: (a?: any, b?: any) => any;
					hiddenInputCancel: (a?: any, b?: any) => any;
					contributorList: (a?: any, b?: any) => any;
				}
				Toolbar: {
					toolbarButton: (a?: any, b?: any) => any;
				}
				SaveBar: {
					Watch: {
						render: (a?: any, b?: any) => any;
					}
					NotifyWatchers: {
						render: (a?: any, b?: any) => any;
					}
					VersionComment: {
						render: (a?: any, b?: any) => any;
					}
				}
				Reliable: {
					draftMessage: (a?: any, b?: any) => any;
				}
				ImageAttributes: {
					content: (a?: any, b?: any) => any;
				}
			}
			DraftChanges: {
				dialogContent: (a?: any, b?: any) => any;
				helpLink: (a?: any, b?: any) => any;
			}
			UnpublishedChanges: {
				lozenge: (a?: any, b?: any) => any;
			}
			ConfluenceJiraPlugin: {
				displayOptsHtml: (a?: any, b?: any) => any;
				displayOptsOverlayHtml: (a?: any, b?: any) => any;
				searchForm: (a?: any, b?: any) => any;
				warningDialog: (a?: any, b?: any) => any;
				issueCheckbox: (a?: any, b?: any) => any;
				issueKey: (a?: any, b?: any) => any;
				showMessageNoServer: (a?: any, b?: any) => any;
				viewAll: (a?: any, b?: any) => any;
				learnMore: (a?: any, b?: any) => any;
				contentJiraChart: (a?: any, b?: any) => any;
				piechartForm: (a?: any, b?: any) => any;
				createdVsResolved: (a?: any, b?: any) => any;
				twoDimensional: (a?: any, b?: any) => any;
				jiraChartErrorMessage: (a?: any, b?: any) => any;
				noServerWarning: (a?: any, b?: any) => any;
				addMoreToComeLink: (a?: any, b?: any) => any;
				addCrossMacroLink: (a?: any, b?: any) => any;
				jqlInvalid: (a?: any, b?: any) => any;
				warningValWidthColumn: (a?: any, b?: any) => any;
				warningValMaxiumIssues: (a?: any, b?: any) => any;
				showJiraUnsupportedVersion: (a?: any, b?: any) => any;
				createIssuesForm: (a?: any, b?: any) => any;
				renderOptions: (a?: any, b?: any) => any;
				renderOption: (a?: any, b?: any) => any;
				renderCreateErrorPanel: (a?: any, b?: any) => any;
			}
			SynchronyPresence: {
				container: (a?: any, b?: any) => any;
				avatar: (a?: any, b?: any) => any;
				overlay: (a?: any, b?: any) => any;
			}
			CollaborativeEditor: {
				StatusIndicator: {
					container: (a?: any, b?: any) => any;
				}
			}
			SelectGrid: {
				gridOutline: (a?: any, b?: any) => any;
				cellWithLink: (a?: any, b?: any) => any;
				cellWithoutLink: (a?: any, b?: any) => any;
			}
			Variables: {
				renderVariableItem: (a?: any, b?: any) => any;
			}
			Roadmap: {
				toolbar: (a?: any, b?: any) => any;
				timelineOptionsForm: (a?: any, b?: any) => any;
				timeline: (a?: any, b?: any) => any;
				timelineColumn: (a?: any, b?: any) => any;
				barDialog: (a?: any, b?: any) => any;
				buildPageLink: (a?: any, b?: any) => any;
				inlineEditSaveButton: (a?: any, b?: any) => any;
				inlineEditCancelButton: (a?: any, b?: any) => any;
				roadmapPopupPanel: (a?: any, b?: any) => any;
				roadmapEditor: (a?: any, b?: any) => any;
				lane: (a?: any, b?: any) => any;
				marker: (a?: any, b?: any) => any;
				bar: (a?: any, b?: any) => any;
				newRowLine: (a?: any, b?: any) => any;
				deprecationDialog: (a?: any, b?: any) => any;
				newRowPlaceholder: (a?: any, b?: any) => any;
				laneDialog: (a?: any, b?: any) => any;
				markerDialog: (a?: any, b?: any) => any;
				markerRenameDialog: (a?: any, b?: any) => any;
				laneRenameDialog: (a?: any, b?: any) => any;
				laneColorSelect: (a?: any, b?: any) => any;
				linkPageTitle: (a?: any, b?: any) => any;
				footerActionContent: (a?: any, b?: any) => any;
			}
			Multivote: {
				table: (a?: any, b?: any) => any;
				exampleMultivote: (a?: any, b?: any) => any;
			}
			PageLayout: {
				contentLayout: (a?: any, b?: any) => any;
				cellLayout: (a?: any, b?: any) => any;
				smallCellLayout: (a?: any, b?: any) => any;
				headerLayout: (a?: any, b?: any) => any;
				footerLayout: (a?: any, b?: any) => any;
				columnLayout: (a?: any, b?: any) => any;
				emptyLayout2: (a?: any, b?: any) => any;
				emptySection2: (a?: any, b?: any) => any;
				newSection2: (a?: any, b?: any) => any;
				cell2: (a?: any, b?: any) => any;
			}
			HipChatEmoticons: {
				Dialog: {
					emoticonDialog: (a?: any, b?: any) => any;
					confluenceEmoticons: (a?: any, b?: any) => any;
					hipchatEmoticons: (a?: any, b?: any) => any;
					genericEmoticonRepeater: (a?: any, b?: any) => any;
				}
			}
			BrowseSpaces: {
				spacesLink: (a?: any, b?: any) => any;
			}
			LicenseBanner: {
				wrapper: (a?: any, b?: any) => any;
				expiryBanner: (a?: any, b?: any) => any;
				maintenanceBanner: (a?: any, b?: any) => any;
			}
			DialogWizard: {
				pageContainer: (a?: any, b?: any) => any;
				waitIcon: (a?: any, b?: any) => any;
			}
			Plugins: {
				Content: {
					Status: {
						Indicator: {
							info: (a?: any, b?: any) => any;
							statusEvent: (a?: any, b?: any) => any;
						}
					}
				}
			}
			Meeting: {
				Notes: {
					userMention: (a?: any, b?: any) => any;
				}
			}
			Comments: {
				displayReplyEditorLoadingContainer: (a?: any, b?: any) => any;
				displayTopLevelCommentEditorPlaceholder: (a?: any, b?: any) => any;
				displayEditEditorContainer: (a?: any, b?: any) => any;
				editorLoadErrorMessage: (a?: any, b?: any) => any;
				displayCommentEditorCommon: (a?: any, b?: any) => any;
				userLogo: (a?: any, b?: any) => any;
				displayComment: (a?: any, b?: any) => any;
				commentThread: (a?: any, b?: any) => any;
				commentThreadItem: (a?: any, b?: any) => any;
				commentView: (a?: any, b?: any) => any;
				displayCommentActions: (a?: any, b?: any) => any;
			}
			Dashboard: {
				streamItems: (a?: any, b?: any) => any;
				streamItemsContents: (a?: any, b?: any) => any;
				titleFirstStreamItem: (a?: any, b?: any) => any;
				compactStreamItem: (a?: any, b?: any) => any;
				Updates: {
					streamLoading: (a?: any, b?: any) => any;
					tabs: (a?: any, b?: any) => any;
					updatesTab: (a?: any, b?: any) => any;
					updates: (a?: any, b?: any) => any;
					displayErrors: (a?: any, b?: any) => any;
					updateItem: (a?: any, b?: any) => any;
					updateItemNoPics: (a?: any, b?: any) => any;
				}
			}
		}
		PropertyPanel: {
			shouldCreate: boolean;
			current: {
				current: any;
			}
			getAnchor: () => any;
			createFromButtonModel: (a?: any, b?: any, c?: any, d?: any) => any;
			create: (a?: any, b?: any, c?: any, d?: any) => any;
			destroy: () => any;
			hasAnchorChanged: (a?: any) => any;
			Link: {
				name: string;
				canHandleElement: (a?: any) => any;
				handle: (a?: any) => any;
			}
			Image: {
				pluginButtons: any[];
				name: string;
				getPresetImageSize: (a?: any) => any;
				canHandleElement: (a?: any) => any;
				handle: (a?: any) => any;
			}
			Macro: {
				name: string;
				registeredEvents: any[];
				canHandleElement: (a?: any) => any;
				handle: (a?: any) => any;
				registerButtonHandler: (a?: any, b?: any, c?: any) => any;
				registerInitHandler: (a?: any, b?: any) => any;
				yieldButtonFor: (a?: any, b?: any) => any;
			}
			TextPlaceholder: {
				name: string;
				canHandleElement: (a?: any) => any;
				handle: (a?: any) => any;
			}
			Variable: {
				name: string;
				canHandleElement: (a?: any) => any;
				handle: (a?: any) => any;
			}
		}
		QuickNav: {
			addDropDownPostProcess: (a?: any) => any;
			setMakeParams: (a?: any) => any;
			init: (a?: any, b?: any) => any;
		}
		DomFilterField: (a?: any) => any;
		Dialogs: {
			CreateDialogBase: (a?: any) => any;
			Events: {
				ITEM_SELECTED: string;
			}
			Breadcrumbs: {
				getBreadcrumbs: (a?: any, b?: any, c?: any) => any;
				Controller: (a?: any, b?: any) => any;
				defaultGetBreadcrumbs: (a?: any, b?: any, c?: any) => any;
			}
		}
		SpaceBlueprint: {
			loaded: {
				done: () => any;
				fail: () => any;
				progress: () => any;
				state: () => any;
				isResolved: () => any;
				isRejected: () => any;
				then: (a?: any, b?: any, c?: any) => any;
				always: () => any;
				pipe: (a?: any, b?: any, c?: any) => any;
				promise: (a?: any) => any;
				resolve: () => any;
				resolveWith: (a?: any, b?: any) => any;
				reject: () => any;
				rejectWith: (a?: any, b?: any) => any;
				notify: () => any;
				notifyWith: (a?: any, b?: any) => any;
			}
			WelcomeDialog: {
				isShowWelcomeDialog: () => any;
				showWelcomeDialog: () => any;
			}
			CommonWizardBindings: {
				preRender: (a?: any, b?: any) => any;
				postRender: (a?: any, b?: any) => any;
				submit: (a?: any, b?: any) => any;
			}
		}
		Blueprint: {
			register: (a?: any, b?: any) => any;
			validateTitle: (a?: any, b?: any, c?: any, d?: any) => any;
			canCreatePage: (a?: any, b?: any) => any;
			hasWizard: (a?: any, b?: any) => any;
			setWizard: (a?: any, b?: any) => any;
			getWizard: (a?: any) => any;
			setDirectCallback: (a?: any, b?: any) => any;
			getDirectCallback: (a?: any) => any;
			fireWizard: (a?: any, b?: any, c?: any) => any;
			Util: {
				getParentPageLocation: () => any;
			}
			Selector: {
				registerSelector: (a?: any) => any;
				getSelectors: () => any;
			}
			Dialog: {
				openDialog: (a?: any) => any;
				closeDialog: () => any;
				requestWebItems: (a?: any, b?: any) => any;
				requestSpaces: () => any;
				loadedWebitems: {
				}
				loadedSpaces: {
				}
				fillWebItemsInDialog: (a?: any, b?: any) => any;
				filterWebItems: (a?: any) => any;
				getSpaceKey: () => any;
			}
			loadDialog: (a?: any) => any;
			loadDialogAndOpenTemplate: (a?: any) => any;
		}
		Quick: {
			Create: {
				discoveryTooltip: (a?: any, b?: any) => any;
			}
		}
		KeyboardShortcuts: {
			Editor: any[];
			enabled: boolean;
			ready: boolean;
			dialog: {
				dialog: any;
			}
			closeDialog: () => any;
			openDialog: () => any;
			getDialog: () => any;
			Autoformat: any[];
			shortcuts: any[];
		}
		Analytics: {
			setAnalyticsSource: (a?: any, b?: any) => any;
			srcRemovedUrl: (a?: any) => any;
			srcParamValues: (a?: any) => any;
			srcAttrParamValues: (a?: any) => any;
			extractAnalyticsData: (a?: any) => any;
			publish: (a?: any, b?: any) => any;
			init: () => any;
		}
		Watch: {
			Templates: {
				dialogBody: (a?: any, b?: any) => any;
			}
		}
		SharePage: {
			autocompleteUser: (a?: any) => any;
			initDialog: (a?: any, b?: any, c?: any) => any;
		}
		FileTypesUtils: {
			getAUIIconFromMime: (a?: any) => any;
			isImage: (a?: any) => any;
		}
		ViewFileMacro: {
			Templates: {
				embeddedFile: (a?: any, b?: any) => any;
				embeddedUnknownFile: (a?: any, b?: any) => any;
				overlayEmbeddedFile: (a?: any, b?: any) => any;
				overlayEmbeddedFileCommentCount: (a?: any, b?: any) => any;
				overlayEmbeddedFileFileTypeDesc: (a?: any, b?: any) => any;
				Editor: {
					viewFilePropertyPanelHeader: (a?: any, b?: any) => any;
				}
			}
		}
		Editor: {
			FileDialog: {
				FileItemModel: () => any;
				FileItemView: () => any;
				FilePlaceHolderView: () => any;
				FileListCollection: () => any;
				FileListView: () => any;
				BasePanel: () => any;
				eventListener: {
					on: (a?: any, b?: any, c?: any) => any;
					once: (a?: any, b?: any, c?: any) => any;
					off: (a?: any, b?: any, c?: any) => any;
					trigger: (a?: any) => any;
					stopListening: (a?: any, b?: any, c?: any) => any;
					listenTo: (a?: any, b?: any, c?: any) => any;
					listenToOnce: (a?: any, b?: any, c?: any) => any;
					bind: (a?: any, b?: any, c?: any) => any;
					unbind: (a?: any, b?: any, c?: any) => any;
				}
				AttachmentsPanelView: () => any;
				ExternalPanelView: () => any;
				SearchPanelView: () => any;
				FileDialogView: () => any;
			}
			bookmark: string;
			MODE_RICHTEXT: string;
			MODE_SOURCE: string;
			MODE_PREVIEW: string;
			PREVIEW_OUTPUT_TYPE: string;
			currentEditMode: {
				currentEditMode: any;
			}
			contentHasChangedSinceLastSave: boolean;
			sourceInitialValue: boolean;
			isSubmitting: boolean;
			isCancelling: boolean;
			isLimitedModeEnabled: () => any;
			overrideBeforeSave: (a?: any) => any;
			overrideSave: (a?: any) => any;
			restoreDefaultSave: () => any;
			getNumConcurrentEditors: () => any;
			addCancelHandler: (a?: any) => any;
			addSaveHandler: (a?: any) => any;
			addSubmitHandler: (a?: any) => any;
			removeAllCancelHandlers: () => any;
			removeAllSaveHandlers: () => any;
			removeAllSubmitHandlers: () => any;
			hasContentChanged: () => any;
			editorHasContentChanged: () => any;
			isEmpty: () => any;
			getResumeDraftUrl: () => any;
			getCurrentTitle: () => any;
			contentFormSubmit: () => any;
			metadataSyncRequired: () => any;
			heartbeat: () => any;
			heartbeatType: {
				normal: () => any;
				recovery: () => any;
				reset: () => any;
			}
			disableFrame: (a?: any) => any;
			previewFrameOnload: (a?: any, b?: any) => any;
			showRichText: (a?: any) => any;
			showPreview: (a?: any) => any;
			showSource: (a?: any) => any;
			setMode: (a?: any) => any;
			getContentId: () => any;
			addErrorMessage: (a?: any, b?: any, c?: any) => any;
			changeMode: (a?: any, b?: any) => any;
			replysetPreviewArea: (a?: any) => any;
			inRichTextMode: () => any;
			isNewPage: () => any;
			onInit: () => any;
			contentChangeHandler: () => any;
			getCurrentForm: () => any;
			transferSourceToEditor: () => any;
			hideSourceArea: () => any;
			showSourceArea: () => any;
			getSourceAreaVal: () => any;
			setSourceAreaVal: (a?: any) => any;
			setSourceAreaHeight: () => any;
			setToolBarInactive: (a?: any) => any;
			isVisible: () => any;
			ImageDialog: {
				beforeShowListeners: any[];
				panelComponent: any[];
				sizeToFit: () => any;
				defaultInsertImageDialog: () => any;
				findPanelComponentById: (a?: any) => any;
				insertImageDialog: (a?: any, b?: any) => any;
			}
			defaultInsertImageDialog: () => any;
			insertImageDialog: (a?: any, b?: any) => any;
			Drafts: {
				isDraftSaved: () => any;
				isDraftManuallySaved: () => any;
				isDraftBlank: () => any;
				isNewContent: () => any;
				isDraftDirty: () => any;
				unloadMessage: () => any;
				hasPendingChanges: () => any;
				isSharedDraftsEnabled: () => any;
				bindUnloadMessage: () => any;
				unBindUnloadMessage: () => any;
				useDraft: () => any;
				discardDraft: (a?: any) => any;
				save: (a?: any) => any;
			}
			Toolbar: {
				Components: {
					Button: (a?: any) => any;
					DropDownButton: (a?: any) => any;
					TextButton: (a?: any) => any;
					TextBox: (a?: any) => any;
					Group: (a?: any, b?: any) => any;
					SplitGroup: (a?: any, b?: any) => any;
				}
			}
			regex: {
				URL: {
					exec: (a?: any) => any;
					test: (a?: any) => any;
				}
				EMAIL: {
					exec: (a?: any) => any;
					test: (a?: any) => any;
				}
			}
			ImageProps: {
				init: () => any;
				registerPanel: (a?: any, b?: any, c?: any, d?: any) => any;
			}
			Adapter: {
				putCursorAtPostionInElement: (a?: any, b?: any, c?: any) => any;
				storeCurrentSelectionState: () => any;
				restoreSelectionState: () => any;
				insertLink: (a?: any, b?: any) => any;
				getCurrentBaseUrl: () => any;
				addOnInitCallback: (a?: any) => any;
				bindScroll: (a?: any, b?: any) => any;
				unbindScroll: (a?: any) => any;
				getTinyMceHasInit: () => any;
				getEditor: () => any;
				addTinyMcePluginInit: (a?: any) => any;
				isExternalLink: (a?: any) => any;
				isInMacroPlaceholder: (a?: any) => any;
				initialiseTinyMce: () => any;
				offset: (a?: any) => any;
				getSelectedText: () => any;
				setEditorValue: (a?: any) => any;
				getEditorHTML: () => any;
				editorHasContentChanged: () => any;
				editorResetContentChanged: () => any;
				getChildIndex: (a?: any, b?: any) => any;
				getMainEditor: () => any;
				getEditorContainer: () => any;
				getEditorFrame: () => any;
				getEditorTable: () => any;
				webResourcePath: string;
				getResourceUrlPrefix: () => any;
				getTinyMceBaseUrl: () => any;
				getMinEditorHeight: () => any;
				getTinyMceEditorMinHeight: (a?: any) => any;
			}
			JiraAnalytics: {
				events: {
					paste: {
						key: string;
					}
					search: {
						key: string;
					}
					trigger: {
						key: string;
					}
					customizeColumn: {
						key: string;
					}
				}
				linkTypes: {
					jqlDirect: string;
					jql: string;
					xml: string;
					rss: string;
					filter: string;
				}
				getDisplayType: (a?: any) => any;
				setupAnalyticPanelActionObject: (a?: any, b?: any, c?: any) => any;
				setupPanelActionProperties: (a?: any, b?: any, c?: any) => any;
				triggerPasteEvent: (a?: any) => any;
				triggerPannelActionEvent: (a?: any) => any;
				triggerSearchEvent: (a?: any) => any;
				triggerMarkupEvent: (a?: any) => any;
				triggerPannelTriggerEvent: (a?: any) => any;
				triggerCustomizeColumnEvent: (a?: any) => any;
			}
			JiraConnector: {
				warningPopup: (a?: any) => any;
				closePopup: () => any;
				open: (a?: any, b?: any) => any;
				openCleanDialog: (a?: any) => any;
				edit: (a?: any) => any;
				source: {
					macroBrowser: string;
					editorBraceKey: string;
					editorHotKey: string;
					editorDropdownLink: string;
					instructionalText: string;
				}
				Panels: any[];
				clickConfigApplink: boolean;
				hotKey: () => any;
				Panel: () => any;
				Select2: {
					getKeyColumnsSelectedOptions: (a?: any) => any;
				}
			}
			JiraChart: {
				close: () => any;
				edit: (a?: any) => any;
				search: (a?: any) => any;
				disableInsert: () => any;
				enableInsert: () => any;
				disableSearch: (a?: any) => any;
				enableSearch: (a?: any) => any;
				insertJiraChartMacroWithParams: (a?: any) => any;
				open: (a?: any) => any;
				clearChartContent: (a?: any) => any;
				loadServers: (a?: any) => any;
				validateServerSupportedChart: (a?: any) => any;
				Panels: any[];
				Helper: {
					getSelectedServer: (a?: any) => any;
					bindingCommonChartElements: (a?: any) => any;
					bindingCommonDataFromMacroToForm: (a?: any, b?: any) => any;
					getCommonMacroParamsFromDialog: (a?: any, b?: any) => any;
					getCommonChartParamsRequest: (a?: any, b?: any) => any;
					convertSearchTextToJQL: (a?: any) => any;
					convertFormatWidth: (a?: any) => any;
					isChartWidthValid: (a?: any) => any;
					isNumber: (a?: any) => any;
					isJqlNotEmpty: (a?: any) => any;
					populateStatType: (a?: any, b?: any) => any;
				}
				Panel: () => any;
			}
			LinkAdapter: {
				setLink: (a?: any) => any;
				getLink: () => any;
			}
			LinkBrowser: {
				SEARCH_PANEL: string;
				ATTACHMENTS_PANEL: string;
				WEBLINK_PANEL: string;
				ADVANCED_PANEL: string;
				open: (a?: any) => any;
				cancel: () => any;
				LinkInfoPresenter: (a?: any) => any;
			}
			Autocompleter: {
				Settings: {
				}
				log: (a?: any) => any;
				Util: {
					dropdownLink: (a?: any, b?: any, c?: any) => any;
					getRestData: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any) => any;
				}
				Control: (a?: any, b?: any) => any;
				Manager: {
					getInputDrivenDropdown: () => any;
					triggerListener: (a?: any, b?: any) => any;
					shortcutFired: (a?: any, b?: any) => any;
					reattach: () => any;
				}
			}
			SearchManager: (a?: any) => any;
			CloudAppPaste: (a?: any, b?: any, c?: any) => any;
			AutoComplete: {
				SETTING_DEFAULT: {
					leadingChar: string;
					isDataValid: (a?: any) => any;
					backWords: number;
					onBeforeDie: () => any;
					onAfterStart: () => any;
					onScroll: () => any;
				}
				Manager: (a?: any) => any;
			}
			PushedNavUtil: {
				isInEditPage: () => any;
				filterPreviewHashChange: () => any;
				filterPreviewNavigationEvent: () => any;
			}
		}
		UI: {
			Components: {
				Pagination: {
				}
				SpacePicker: {
					build: () => any;
					filterMixedTypesForValues: (a?: any, b?: any) => any;
				}
				SpacePagePicker: {
					build: () => any;
					setValue: (a?: any, b?: any) => any;
				}
				templates: {
					hiddenField: (a?: any, b?: any) => any;
				}
				PagePicker: {
					build: () => any;
				}
				LabelPicker: {
					build: () => any;
					templates: {
						labelResult: (a?: any, b?: any) => any;
						labelInvalid: (a?: any, b?: any) => any;
					}
				}
				UserGroupSelect2: {
					avatarWithName: (a?: any, b?: any) => any;
				}
				CQL: {
					Templates: {
						container: (a?: any, b?: any) => any;
					}
					FilterSelect: {
						Templates: {
							container: (a?: any, b?: any) => any;
						}
					}
					TypePicker: {
						templates: {
							suggestions: (a?: any, b?: any) => any;
						}
					}
					SpaceField: {
						templates: {
							archivedSpacesOption: (a?: any, b?: any) => any;
						}
					}
				}
				CQLFilters: {
					Templates: {
						baseFilterField: (a?: any, b?: any) => any;
					}
				}
				DatePicker: {
					templates: {
						input: (a?: any, b?: any) => any;
					}
				}
			}
		}
		MacroParameterSerializer: {
			serialize: (a?: any) => any;
			deserialize: (a?: any) => any;
		}
		PageLoadingIndicator: (a?: any) => any;
		PageLocation: {
			get: () => any;
			set: (a?: any) => any;
		}
		Link: {
			isLink: (a?: any) => any;
			fromData: (a?: any) => any;
			fromNode: (a?: any, b?: any) => any;
			fromSelectedAnchor: (a?: any, b?: any) => any;
			fromSelection: (a?: any, b?: any, c?: any, d?: any) => any;
			fromREST: (a?: any) => any;
			createLinkToNewPage: (a?: any, b?: any) => any;
			makeExternalLink: (a?: any) => any;
			isExternalLink: (a?: any) => any;
		}
		Roadmap: {
			Helper: {
				getPosXOnMonthTimeline: (a?: any, b?: any) => any;
				getPosXOnWeekTimeline: (a?: any, b?: any) => any;
				getWidthTimeline: (a?: any, b?: any) => any;
				getMonthStartDateByPosition: (a?: any, b?: any) => any;
				getWeekStartDateByPosition: (a?: any, b?: any) => any;
				guid: () => any;
			}
			ColorHelper: {
				resetColorCounts: () => any;
				findColor: (a?: any) => any;
				adjustColorCount: (a?: any, b?: any) => any;
				getColor: () => any;
			}
			DateUtilities: {
				MILLISECONDS_A_DAY: number;
				MILLISECONDS_A_WEEK: number;
				parseDate: (a?: any) => any;
				getDateStringFromDate: (a?: any, b?: any) => any;
				getDateFromDateString: (a?: any, b?: any) => any;
				getNumberOfMonths: (a?: any, b?: any) => any;
				getMilisecondsInMonth: (a?: any) => any;
				getMilisecondsFromStartMonth: (a?: any) => any;
				calculateDurationInformation: (a?: any) => any;
				convertToWeekDuration: (a?: any, b?: any) => any;
				convertToMonthDuration: (a?: any, b?: any) => any;
			}
			FieldUtilities: {
				fixDatePickerFields: (a?: any) => any;
			}
			Analytics: {
				insertRoadmap: () => any;
				createRoadmap: (a?: any) => any;
				editRoadmap: (a?: any) => any;
				openBarDialogInEdit: () => any;
				addDescription: () => any;
				addPageLinkEditMode: (a?: any) => any;
				addPageLinkViewMode: (a?: any) => any;
				openBarDialogInView: () => any;
				clickPageLink: () => any;
			}
		}
		RoadmapLink: {
			addCreateLinkPageListener: (a?: any, b?: any) => any;
		}
		TeamCalendars: {
			Dialogs: {
				getAddDialogForMacro: (a?: any) => any;
				getSubCalendarCreateDialog: (a?: any, b?: any) => any;
				getTimeZoneSetupDialog: (a?: any) => any;
				getSubCalendarImportDialog: (a?: any) => any;
				getCustomEventTypeEdit: (a?: any, b?: any) => any;
				getEditEventDialog: (a?: any, b?: any, c?: any, d?: any) => any;
				getSubCalendarEditDialog: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
				getAddDialog: (a?: any, b?: any) => any;
				getSubCalendarSubscribeDialog: (a?: any) => any;
			}
			hasJiraLink: number;
			getRestBaseUrl: () => any;
			HelpTip: (a?: any) => any;
			Templates: {
				tipContent: (a?: any, b?: any) => any;
				tipClose: (a?: any, b?: any) => any;
				confirmEventDelete: (a?: any, b?: any) => any;
				confirmRecurringEventDelete: (a?: any, b?: any) => any;
				confirmCustomEventNameDelete: (a?: any, b?: any) => any;
				userTimezoneSetup: (a?: any, b?: any) => any;
				importSubcalendar: (a?: any, b?: any) => any;
				editCustomEventType: (a?: any, b?: any) => any;
				eventEdit: (a?: any, b?: any) => any;
				Fields: {
					text: (a?: any, b?: any) => any;
					inforReminderLabel: (a?: any, b?: any) => any;
					bodyInforReminderLabel: (a?: any, b?: any) => any;
					textarea: (a?: any, b?: any) => any;
					page: (a?: any, b?: any) => any;
					when: (a?: any, b?: any) => any;
					repeats: (a?: any, b?: any) => any;
					user: (a?: any, b?: any) => any;
					userSelection: (a?: any, b?: any) => any;
					serverSelector: (a?: any, b?: any) => any;
					projectSelector: (a?: any, b?: any) => any;
				}
				viewCustomEventType: (a?: any, b?: any) => any;
				editCalendarEventTypes: (a?: any, b?: any) => any;
				calendarTourContent: (a?: any, b?: any) => any;
				shareSubCalendar: (a?: any, b?: any) => any;
				subCalendarPrivateUrlSubscribe: (a?: any, b?: any) => any;
				subCalendarBasicAuthSubscribe: (a?: any, b?: any) => any;
				addDialog: (a?: any, b?: any) => any;
				addInlineDialog: (a?: any, b?: any) => any;
				editInternalSubcalendar: (a?: any, b?: any) => any;
				nonSpaceCalendarsDialog: (a?: any, b?: any) => any;
				nonSpaceCalendarEntry: (a?: any, b?: any) => any;
				iconEventTypePrinting: (a?: any, b?: any) => any;
				iconSubCalendarPrinting: (a?: any, b?: any) => any;
				iconEventTimelinePrinting: (a?: any, b?: any) => any;
				renderImagePrinting: (a?: any, b?: any) => any;
				iconCustomPrinting: (a?: any, b?: any) => any;
				timeZoneDropDown: (a?: any, b?: any) => any;
				subCalendarPanelEntry: (a?: any, b?: any) => any;
				customEventTypePanelEntry: (a?: any, b?: any) => any;
				childSubCalendarPanelEntry: (a?: any, b?: any) => any;
				subCalendarMenu: (a?: any, b?: any) => any;
				customEventTypeMenu: (a?: any, b?: any) => any;
				childSubCalendarMenu: (a?: any, b?: any) => any;
				subCalendarPopupMenu: (a?: any, b?: any) => any;
				subCalendarColourGrid: (a?: any, b?: any) => any;
				editLocalCalendar: (a?: any, b?: any) => any;
				editPeopleCalendar: (a?: any, b?: any) => any;
				editSubscriptionSubcalendar: (a?: any, b?: any) => any;
				hiddenJiraFields: (a?: any, b?: any) => any;
				editJiraCalendar: (a?: any, b?: any) => any;
				editJiraSubCalendarDurations: (a?: any, b?: any) => any;
				subCalendarFeatures: (a?: any, b?: any) => any;
				resetSubCalendarPrivateUrl: (a?: any, b?: any) => any;
				restrictSubCalendar: (a?: any, b?: any) => any;
				removeSubCalendar: (a?: any, b?: any) => any;
				confirmRemoveSubCalendar: (a?: any, b?: any) => any;
				confirmRemoveJiraEvents: (a?: any, b?: any) => any;
				calendarSearchResultTable: (a?: any, b?: any) => any;
				calendarSearchResult: (a?: any, b?: any) => any;
				requireOauthMessage: (a?: any, b?: any) => any;
				timelineEventContentSingleInvitee: (a?: any, b?: any) => any;
				timelineEventContent: (a?: any, b?: any) => any;
				timelineEventContentWithEventTypeIcon: (a?: any, b?: any) => any;
				defaultTimelineEventContent: (a?: any, b?: any) => any;
				subscribeDialog: (a?: any, b?: any) => any;
				eventPopupIssue: (a?: any, b?: any) => any;
				eventPopupVersion: (a?: any, b?: any) => any;
				eventPopupSprint: (a?: any, b?: any) => any;
				eventPopup: (a?: any, b?: any) => any;
				upcomingEvents: (a?: any, b?: any) => any;
			}
			panelEditCalendar: {
				GENERAL_PANEL: number;
				EVENT_TYPE_PANEL: number;
				RESTRICTION_PANEL: number;
				SHARE_EMBEDDED_PANEL: number;
				SUBSCRIBE_PANEL: number;
			}
			ajaxTimeout: number;
			isCalendarSearchDisabled: number;
			getParameter: (a?: any, b?: any) => any;
			getParameters: (a?: any) => any;
			setParameter: (a?: any, b?: any, c?: any) => any;
			getSortedSubCalendarsByTypeAndName: (a?: any) => any;
			getAsArray: () => any;
			populateTimeZoneDropDown: (a?: any, b?: any, c?: any, d?: any) => any;
			getCalendarServiceBaseUrl: (a?: any) => any;
			mergeSubCalendarObjectsToArray: (a?: any) => any;
			isRequireOauth: (a?: any) => any;
			setFieldErrors: (a?: any, b?: any) => any;
			showHTMLGenericError: (a?: any, b?: any, c?: any, d?: any) => any;
			setGenericErrors: (a?: any, b?: any, c?: any) => any;
			showAjaxError: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any) => any;
			getUserTimeZone: () => any;
			shouldShowTimezoneSetup: () => any;
			suppressMessage: (a?: any, b?: any, c?: any) => any;
			fireEventForAnalytics: (a?: any, b?: any) => any;
			isPDLEnabled: () => any;
			isJiraSubCalendar: (a?: any) => any;
			isSubscriptionSubCalendar: (a?: any) => any;
			isInternalSubscriptionSubCalendar: (a?: any) => any;
			isDummySubscriptionParentSubCalendar: (a?: any) => any;
			hasRestriction: (a?: any) => any;
			updateDateDisplay: (a?: any, b?: any) => any;
			showCalendarPopupHaveAnEmptySubcalendar: (a?: any, b?: any) => any;
			disableButton: (a?: any, b?: any) => any;
			enableButton: (a?: any, b?: any) => any;
			isJiraEventStream: (a?: any) => any;
			isCustomEventType: (a?: any) => any;
			isEventTypeSanbox: (a?: any) => any;
			isJiraEvent: (a?: any) => any;
			isJiraType: (a?: any) => any;
			showInforReminder: (a?: any) => any;
			getPeriodReminderEventTypeSanboxOrJira: (a?: any, b?: any) => any;
			getCalendarContext: (a?: any) => any;
			isSingleCalendarView: (a?: any) => any;
			isSpaceCalendarView: (a?: any) => any;
			isEmbeddedCalendarView: (a?: any) => any;
			isMyCalendarView: (a?: any) => any;
			putCalendarContextParams: (a?: any) => any;
			toggleNoCalendarPage: (a?: any) => any;
			isValidLicense: () => any;
			getParamsFromUrl: () => any;
			isCalendarNameTruncated: (a?: any) => any;
			getEditCalendarDialogHelper: (a?: any, b?: any, c?: any) => any;
			subcalendar: {
				other: {
					getDialog: () => any;
					weight: number;
					typeName: string;
				}
				travel: {
					getDialog: () => any;
					weight: number;
					typeName: string;
				}
				leaves: {
					getDialog: () => any;
					weight: number;
					typeName: string;
				}
				birthdays: {
					getDialog: () => any;
					weight: number;
					typeName: string;
				}
				'jira-agile-sprint': {
					getDialog: () => any;
					weight: number;
					typeName: string;
				}
				'jira-project-releases': {
					getDialog: () => any;
					weight: number;
					typeName: string;
				}
				'jira-issue-dates': {
					getDialog: () => any;
					weight: number;
					typeName: string;
				}
				custom: {
					getDialog: () => any;
					weight: number;
					typeName: string;
				}
				parent: {
					getDialog: (a?: any, b?: any, c?: any) => any;
					weight: number;
					typeName: string;
				}
				jira: {
					weight: number;
					typeName: string;
					getDialog: () => any;
				}
				subscription: {
					getDialog: (a?: any, b?: any, c?: any) => any;
					weight: number;
					typeName: string;
				}
				'internal-subscription': {
					cid: string;
					options: {
					}
					$el: {
						0: {
						}
						length: number;
					}
					el: {
					}
				}
			}
			getRemoveJiraEventsDialog: (a?: any, b?: any, c?: any) => any;
			getTimelineAdapter: (a?: any, b?: any, c?: any, d?: any) => any;
			LocalStorage: {
				getItem: (a?: any) => any;
				setItem: (a?: any, b?: any, c?: any) => any;
			}
			CalendarTour: () => any;
		}
		InlineTasks: {
			Util: {
				NODE_TYPE: {
					ELEMENT_NODE: number;
					ATTRIBUTE_NODE: number;
					TEXT_NODE: number;
					CDATA_SECTION_NODE: number;
					ENTITY_REFERENCE_NODE: number;
					ENTITY_NODE: number;
					PROCESSING_INSTRUCTION_NODE: number;
					COMMENT_NODE: number;
					DOCUMENT_NODE: number;
					DOCUMENT_TYPE_NODE: number;
					DOCUMENT_FRAGMENT_NODE: number;
					NOTATION_NODE: number;
				}
				KEY: {
					BACKSPACE: number;
					SPACE: number;
					PAGEUP: number;
					PAGEDOWN: number;
					END: number;
					HOME: number;
					INS: number;
					TAB: number;
					ENTER: number;
					SHIFT: number;
					CTRL: number;
					ALT: number;
					ESCAPE: number;
					LEFT: number;
					UP: number;
					RIGHT: number;
					DOWN: number;
					DELETE: number;
					META: number;
				}
				addContentEditableIfApplicable: (a?: any) => any;
			}
			DateUtil: {
				PATTERN_INSERTING: string;
				PATTERN_LOZENGE: string;
				PATTERN_INSIDE_TIME_ELE: string;
				convertDateIntoHtml: (a?: any, b?: any, c?: any, d?: any) => any;
				insertDateIntoCurrentCursor: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
				parse: (a?: any, b?: any) => any;
				format: (a?: any, b?: any) => any;
				guessPartialDate: (a?: any, b?: any) => any;
				datepicker: {
					POSITION_ABOVE: boolean;
					POSITION_BELOW: boolean;
					POSITION_RIGHT: boolean;
					POSITION_LEFT: boolean;
					dropDownStillFitsVertically: (a?: any, b?: any, c?: any) => any;
					dropDownStillFitsHorizontally: (a?: any, b?: any, c?: any) => any;
					getPreferredHorizontalPosition: (a?: any, b?: any) => any;
					getPreferredVerticalPosition: (a?: any, b?: any) => any;
					calculateDatepickerPosition: (a?: any) => any;
					getHintTextOfDatePicker: (a?: any) => any;
					create: (a?: any) => any;
				}
				PATTERN_INSERTING_ALTERNATE: string;
			}
		}
		DragAndDrop: {
			UploadClientController: (a?: any) => any;
			UploadClient: (a?: any) => any;
		}
		FeatureDiscovery: {
			forPlugin: (a?: any, b?: any) => any;
		}
		DialogWizard: (a?: any, b?: any) => any;
		Blueprints: {
			Common: {
				Index: {
					detailsSummaryMacro: (a?: any, b?: any) => any;
					createFromTemplateMacro: (a?: any, b?: any) => any;
				}
			}
			Meeting: {
				Notes: {
					howTo: (a?: any, b?: any) => any;
				}
			}
		}
		Request: {
			Access: {
				result: (a?: any, b?: any) => any;
				usernameLink: (a?: any, b?: any) => any;
				loading: (a?: any, b?: any) => any;
			}
		}
		Grant: {
			Access: {
				dialog: (a?: any, b?: any) => any;
				result: (a?: any, b?: any) => any;
				usernameLink: (a?: any, b?: any) => any;
			}
		}
		EditorLoader: {
			getPreloadContainer: () => any;
			getEditorPreloadMarkup: () => any;
			resourcesLoaded: () => any;
			loadingTimeout: number;
			isEditorActive: () => any;
			load: (a?: any, b?: any) => any;
			getEditorForm: () => any;
		}
		BlockAndBuffer: {
			block: (a?: any) => any;
		}
		CommentDisplayManager: {
			addComment: (a?: any, b?: any, c?: any, d?: any) => any;
			addOrUpdateComment: (a?: any, b?: any, c?: any, d?: any) => any;
			isVisible: () => any;
			hasComments: () => any;
			commentCount: () => any;
			clearFocus: () => any;
			getCommentNode: (a?: any) => any;
			getParentId: (a?: any) => any;
		}
		SourceEditor: {
			Templates: {
				toolbar: (a?: any, b?: any) => any;
				sourceEditorPlaceholder: (a?: any, b?: any) => any;
				sourceEditorFooterLeftToolbar: (a?: any, b?: any) => any;
			}
		}
		Dashboard: {
			reloadPopularStream: (a?: any) => any;
			showSpinner: (a?: any) => any;
		}
	}
	Position: {
		spaceAboveBelow: (a?: any, b?: any) => any;
	}
	inputDrivenDropdown: (a?: any) => any;
	followCallbacks: any[];
	favouriteCallbacks: any[];
	moreLinkClickHandler: (a?: any) => any;
	safe: {
		ajax: (a?: any) => any;
		get: (a?: any, b?: any, c?: any, d?: any) => any;
		getScript: (a?: any, b?: any) => any;
		getJSON: (a?: any, b?: any, c?: any) => any;
		post: (a?: any, b?: any, c?: any, d?: any) => any;
	}
	safeAjax: (a?: any) => any;
	General: {
		getContextPath: () => any;
		getBaseUrl: () => any;
	}
	trim: (a?: any) => any;
	renderTemplate: (a?: any, b?: any) => any;
	loadTemplatesFromUrl: (a?: any, b?: any) => any;
	loadWebResourceTemplates: (a?: any, b?: any, c?: any) => any;
	escapeEntities: (a?: any) => any;
	getTemplate: (a?: any) => any;
	loadTemplateScripts: (a?: any) => any;
	html: (a?: any) => any;
	menuShowCount: number;
	Labels: {
		addLabel: (a?: any, b?: any, c?: any) => any;
		removeLabel: (a?: any, b?: any, c?: any) => any;
		bindAutocomplete: () => any;
		labelsAreNotPersisted: (a?: any) => any;
		routes: {
			base: string;
			getRestEndPoint: (a?: any) => any;
			index: string;
			validate: () => any;
			add: (a?: any, b?: any) => any;
			remove: (a?: any, b?: any, c?: any) => any;
			list: (a?: any, b?: any) => any;
		}
		setLabelError: (a?: any) => any;
		parseLabelStringToArray: (a?: any) => any;
		getLabelLink: (a?: any, b?: any) => any;
		setLabelsInputField: (a?: any) => any;
		getLabelsInputField: () => any;
		bindOpenDialog: (a?: any) => any;
		openDialog: (a?: any) => any;
		updateDialogLabelList: (a?: any) => any;
	}
	getWindowQueryParams: () => any;
	Tooltip: (a?: any) => any;
	bindEvt: () => any;
	triggerEvt: () => any;
	triggerEvtForInst: () => any;
	RestfulTable: () => any;
	InlineDialog2: () => any;
	sidebar: (a?: any, b?: any) => any;
	DatePicker: (a?: any, b?: any) => any;
	dialog2: (a?: any, b?: any) => any;
	SummaryHelper: {
		getCurrentParams: (a?: any) => any;
		getParam: (a?: any, b?: any) => any;
		updateMacro: (a?: any, b?: any, c?: any, d?: any) => any;
	}
	MacroBrowser: {
		ParameterFields: {
			updateDependencies: (a?: any, b?: any, c?: any) => any;
			username: (a?: any, b?: any) => any;
			spacekey: (a?: any, b?: any) => any;
			attachment: (a?: any, b?: any) => any;
			full_attachment: (a?: any, b?: any) => any;
			'confluence-content': (a?: any, b?: any) => any;
			string: (a?: any, b?: any) => any;
			boolean: (a?: any, b?: any) => any;
			enum: (a?: any, b?: any) => any;
		}
		Field: (a?: any, b?: any, c?: any) => any;
		activateSmartFieldsAttachmentsOnPage: (a?: any, b?: any) => any;
		Utils: {
			makeDefaultKey: () => any;
		}
		Editor: {
			loadMacroInBrowser: (a?: any) => any;
			getMacroParametersFromForm: (a?: any) => any;
			getMacroDefinitionFromForm: (a?: any) => any;
			processRequiredParameters: () => any;
		}
		Preview: {
			previewMacro: (a?: any, b?: any) => any;
			removePreviewContainer: () => any;
		}
		Model: {
			loadMacros: (a?: any) => any;
			transformMetaDataDefault: (a?: any) => any;
		}
		Rest: {
			loadMacroMetadata: (a?: any) => any;
			fetchMacroMetadataDetails: (a?: any) => any;
			fetchMacroPreviewData: (a?: any) => any;
		}
		UI: {
			createDialog: (a?: any) => any;
			showBrowserSpinner: (a?: any) => any;
			showPreviewSpinner: (a?: any) => any;
			updateButtonText: (a?: any) => any;
			enableSaveButton: (a?: any) => any;
			focusOnMacroDetailsFirstInput: () => any;
			setHelpLink: (a?: any, b?: any) => any;
		}
		reset: () => any;
		getMacroJsOverride: (a?: any) => any;
		setMacroJsOverride: (a?: any, b?: any) => any;
		Macros: {
			jira: {
				opener: (a?: any) => any;
			}
			jiraissues: {
				opener: (a?: any) => any;
			}
			jirachart: {
				opener: (a?: any) => any;
			}
			viewdoc: {
				fileTypes: any[];
			}
			viewpdf: {
				fileTypes: any[];
			}
			viewxls: {
				fileTypes: any[];
			}
			viewppt: {
				fileTypes: any[];
			}
			viewfile: {
				updateSelectedMacro: (a?: any) => any;
			}
			'pivot-table': {
				pivotTableMacro: {
					tables: any[];
					tableColumns: any[];
					columnSelect: {
						columnSelect: any;
					}
					rowSelect: {
						rowSelect: any;
					}
					aggregateSelect: {
						aggregateSelect: any;
					}
					tfBody: string;
					typeParams: any[];
					columnParams: any[];
					rowParams: any[];
					aggregateParams: any[];
					sortColumns: any[];
					gotBody: boolean;
				}
			}
			'table-chart': {
				tableChartMacro: {
					tableChartMacro: any;
				}
			}
			'table-filter': {
				tableFilterMacro: {
					tables: any[];
					iconTables: any[];
					tableColumns: any[];
					sortColumns: any[];
					columnSelect: {
						columnSelect: any;
					}
					userfilterSelect: {
						userfilterSelect: any;
					}
					numberfilterSelect: {
						numberfilterSelect: any;
					}
					datefilterSelect: {
						datefilterSelect: any;
					}
					iconfilterSelect: {
						iconfilterSelect: any;
					}
					sortSelect: {
						sortSelect: any;
					}
					columnParams: any[];
					userfilterParams: any[];
					numberfilterParams: any[];
					datefilterParams: any[];
					iconfilterParams: any[];
					sortParams: any[];
					dateFormatInput: {
						dateFormatInput: any;
					}
					dateFormatContainer: {
						dateFormatContainer: any;
					}
					separatorContainer: {
						separatorContainer: any;
					}
					supportOldSize: boolean;
					tfBody: string;
					defaults: {
					}
					widths: {
					}
					inverse: {
					}
					gotBody: boolean;
					order: {
					}
					labels: {
					}
					totalRow: any[];
				}
			}
			stashincludebyfilepath: {
			}
			stashincludebyantglob: {
			}
			stashopenpullrequests: {
			}
			stashbranches: {
			}
			stashcommits: {
			}
			code: {
			}
			'button-handy': {
			}
			'status-handy': {
			}
			timestamp: {
			}
			'handy-reminder': {
			}
			'handy-carousel': {
			}
			'social-handy': {
			}
			multimedia: {
				fileTypes: any[];
			}
			sql: {
			}
			'sql-query': {
			}
			'sql-file': {
			}
			'tasks-report-macro': {
				fields: {
					string: {
						spaceAndPage: (a?: any) => any;
					}
				}
				beforeParamsSet: (a?: any) => any;
				beforeParamsRetrieved: (a?: any) => any;
			}
			'view-git-file': {
			}
			'easy-form': {
				fields: {
					string: {
						'source-page-id': (a?: any, b?: any) => any;
					}
				}
			}
			'create-from-template': {
				fields: {
					spacekey: {
						spaceKey: (a?: any) => any;
					}
				}
				beforeParamsSet: (a?: any, b?: any) => any;
				beforeParamsRetrieved: (a?: any, b?: any, c?: any) => any;
			}
			roadmap: {
				opener: (a?: any) => any;
			}
			'view-file': {
				opener: (a?: any) => any;
			}
			gliffy: {
				opener: (a?: any) => any;
			}
			'cover-stories': {
				opener: (a?: any) => any;
			}
			'news-teaser': {
				beforeParamsSet: (a?: any) => any;
				beforeParamsRetrieved: (a?: any) => any;
			}
			'corporate-news-feed': {
				beforeParamsSet: (a?: any) => any;
				beforeParamsRetrieved: (a?: any) => any;
				fields: {
					string: {
						newsSource: (a?: any) => any;
						numPostsDisplayed: () => any;
					}
				}
			}
			'personal-news-feed': {
				beforeParamsSet: (a?: any) => any;
				beforeParamsRetrieved: (a?: any) => any;
				fields: {
					string: {
						numPostsDisplayed: () => any;
					}
				}
			}
			'web-feed': {
				beforeParamsSet: (a?: any) => any;
				beforeParamsRetrieved: (a?: any) => any;
				fields: {
					string: {
						feedSource: (a?: any) => any;
						numPostsDisplayed: () => any;
					}
				}
			}
			profile: {
				beforeParamsSet: (a?: any) => any;
				beforeParamsRetrieved: (a?: any) => any;
			}
			'custom-user-list': {
				beforeParamsSet: (a?: any) => any;
				beforeParamsRetrieved: (a?: any, b?: any, c?: any) => any;
			}
			'custom-user-search': {
				beforeParamsSet: (a?: any) => any;
				beforeParamsRetrieved: (a?: any, b?: any, c?: any) => any;
			}
			'my-contacts-macro': {
				beforeParamsSet: (a?: any) => any;
				beforeParamsRetrieved: (a?: any, b?: any, c?: any) => any;
			}
			'join-event': {
				fields: {
					string: (a?: any, b?: any) => any;
					int: (a?: any, b?: any) => any;
					boolean: (a?: any, b?: any) => any;
				}
				beforeParamsSet: (a?: any) => any;
				beforeParamsRetrieved: (a?: any, b?: any, c?: any) => any;
			}
			'event-calendar': {
				beforeParamsSet: (a?: any) => any;
				fields: {
					boolean: (a?: any, b?: any) => any;
				}
			}
			'upcoming-events': {
				beforeParamsSet: (a?: any) => any;
			}
			gadget: {
				postPreview: (a?: any, b?: any) => any;
				beforeParamsSet: (a?: any, b?: any) => any;
				updateMacroParametersForPreview: (a?: any) => any;
				manipulateMarkup: (a?: any) => any;
				getMacroDetailsFromSelectedMacro: (a?: any, b?: any) => any;
				beforeParamsRetrieved: (a?: any, b?: any, c?: any) => any;
			}
			globaltimeline: {
				fields: {
					spacekey: (a?: any) => any;
					int: (a?: any) => any;
				}
				beforeParamsSet: (a?: any) => any;
				beforeParamsRetrieved: (a?: any) => any;
			}
			'questionslist-macro': {
				beforeParamsRetrieved: (a?: any, b?: any, c?: any) => any;
			}
		}
		hasInit: boolean;
		metadataList: any[];
		aliasMap: {
			'bitbucketserver-branches': string;
			'space-calendar': string;
			'team-calendar': string;
			bereichsfilter: string;
			'web-widget': string;
			'bitbucketserver-includebyantglob': string;
			'fav-pages': string;
			trademark: string;
			dynamictasklist: string;
			servicemark: string;
			'bitbucketserver-openpullrequests': string;
			'bitbucketserver-commits': string;
			'bitbucketserver-includebyfilepath': string;
			news: string;
			blogs: string;
			blogposts: string;
			blogpost: string;
			blog: string;
			'blog-post': string;
			skype: string;
			gtalk: string;
			aim: string;
			icq: string;
			wildfire: string;
			yahoo: string;
			msn: string;
			sametime: string;
			skypeme: string;
			'spaces-list': string;
		}
		fields: {
		}
		processRequiredParameters: () => any;
		paramChanged: () => any;
		loadMacroInBrowser: () => any;
		getMacroDefinitionFromForm: (a?: any) => any;
		getMacroParametersFromForm: (a?: any) => any;
		previewMacro: (a?: any) => any;
		previewOnload: (a?: any) => any;
		getMacroMetadata: (a?: any) => any;
		getMetadataPromise: () => any;
		open: (a?: any) => any;
		openMacroBrowser: (a?: any) => any;
		showBrowserDialog: () => any;
		complete: () => any;
		cancel: () => any;
		close: () => any;
		replicateSelectMacro: (a?: any, b?: any) => any;
		initBrowser: () => any;
		searchSummaries: (a?: any, b?: any) => any;
		getMacroBody: () => any;
		getMacroParams: (a?: any) => any;
		getMacroName: (a?: any) => any;
		isHiddenMacroShown: (a?: any) => any;
		hasRequiredParameters: (a?: any) => any;
		setWhitelist: (a?: any) => any;
		preLoadMacro: () => any;
		initData: {
			macros: any[];
			insertTitle: string;
			editTitle: string;
			categories: any[];
			title: string;
		}
	}
	Editor: {
		FileDialog: {
			FileItemModel: () => any;
			FileItemView: () => any;
			FilePlaceHolderView: () => any;
			FileListCollection: () => any;
			FileListView: () => any;
			BasePanel: () => any;
			eventListener: {
				on: (a?: any, b?: any, c?: any) => any;
				once: (a?: any, b?: any, c?: any) => any;
				off: (a?: any, b?: any, c?: any) => any;
				trigger: (a?: any) => any;
				stopListening: (a?: any, b?: any, c?: any) => any;
				listenTo: (a?: any, b?: any, c?: any) => any;
				listenToOnce: (a?: any, b?: any, c?: any) => any;
				bind: (a?: any, b?: any, c?: any) => any;
				unbind: (a?: any, b?: any, c?: any) => any;
			}
			AttachmentsPanelView: () => any;
			ExternalPanelView: () => any;
			SearchPanelView: () => any;
			FileDialogView: () => any;
		}
		bookmark: string;
		MODE_RICHTEXT: string;
		MODE_SOURCE: string;
		MODE_PREVIEW: string;
		PREVIEW_OUTPUT_TYPE: string;
		currentEditMode: {
			currentEditMode: any;
		}
		contentHasChangedSinceLastSave: boolean;
		sourceInitialValue: boolean;
		isSubmitting: boolean;
		isCancelling: boolean;
		isLimitedModeEnabled: () => any;
		overrideBeforeSave: (a?: any) => any;
		overrideSave: (a?: any) => any;
		restoreDefaultSave: () => any;
		getNumConcurrentEditors: () => any;
		addCancelHandler: (a?: any) => any;
		addSaveHandler: (a?: any) => any;
		addSubmitHandler: (a?: any) => any;
		removeAllCancelHandlers: () => any;
		removeAllSaveHandlers: () => any;
		removeAllSubmitHandlers: () => any;
		hasContentChanged: () => any;
		editorHasContentChanged: () => any;
		isEmpty: () => any;
		getResumeDraftUrl: () => any;
		getCurrentTitle: () => any;
		contentFormSubmit: () => any;
		metadataSyncRequired: () => any;
		heartbeat: () => any;
		heartbeatType: {
			normal: () => any;
			recovery: () => any;
			reset: () => any;
		}
		disableFrame: (a?: any) => any;
		previewFrameOnload: (a?: any, b?: any) => any;
		showRichText: (a?: any) => any;
		showPreview: (a?: any) => any;
		showSource: (a?: any) => any;
		setMode: (a?: any) => any;
		getContentId: () => any;
		addErrorMessage: (a?: any, b?: any, c?: any) => any;
		changeMode: (a?: any, b?: any) => any;
		replysetPreviewArea: (a?: any) => any;
		inRichTextMode: () => any;
		isNewPage: () => any;
		onInit: () => any;
		contentChangeHandler: () => any;
		getCurrentForm: () => any;
		transferSourceToEditor: () => any;
		hideSourceArea: () => any;
		showSourceArea: () => any;
		getSourceAreaVal: () => any;
		setSourceAreaVal: (a?: any) => any;
		setSourceAreaHeight: () => any;
		setToolBarInactive: (a?: any) => any;
		isVisible: () => any;
		ImageDialog: {
			beforeShowListeners: any[];
			panelComponent: any[];
			sizeToFit: () => any;
			defaultInsertImageDialog: () => any;
			findPanelComponentById: (a?: any) => any;
			insertImageDialog: (a?: any, b?: any) => any;
		}
		defaultInsertImageDialog: () => any;
		insertImageDialog: (a?: any, b?: any) => any;
		Drafts: {
			isDraftSaved: () => any;
			isDraftManuallySaved: () => any;
			isDraftBlank: () => any;
			isNewContent: () => any;
			isDraftDirty: () => any;
			unloadMessage: () => any;
			hasPendingChanges: () => any;
			isSharedDraftsEnabled: () => any;
			bindUnloadMessage: () => any;
			unBindUnloadMessage: () => any;
			useDraft: () => any;
			discardDraft: (a?: any) => any;
			save: (a?: any) => any;
		}
		Toolbar: {
			Components: {
				Button: (a?: any) => any;
				DropDownButton: (a?: any) => any;
				TextButton: (a?: any) => any;
				TextBox: (a?: any) => any;
				Group: (a?: any, b?: any) => any;
				SplitGroup: (a?: any, b?: any) => any;
			}
		}
		regex: {
			URL: {
				exec: (a?: any) => any;
				test: (a?: any) => any;
			}
			EMAIL: {
				exec: (a?: any) => any;
				test: (a?: any) => any;
			}
		}
		ImageProps: {
			init: () => any;
			registerPanel: (a?: any, b?: any, c?: any, d?: any) => any;
		}
		Adapter: {
			putCursorAtPostionInElement: (a?: any, b?: any, c?: any) => any;
			storeCurrentSelectionState: () => any;
			restoreSelectionState: () => any;
			insertLink: (a?: any, b?: any) => any;
			getCurrentBaseUrl: () => any;
			addOnInitCallback: (a?: any) => any;
			bindScroll: (a?: any, b?: any) => any;
			unbindScroll: (a?: any) => any;
			getTinyMceHasInit: () => any;
			getEditor: () => any;
			addTinyMcePluginInit: (a?: any) => any;
			isExternalLink: (a?: any) => any;
			isInMacroPlaceholder: (a?: any) => any;
			initialiseTinyMce: () => any;
			offset: (a?: any) => any;
			getSelectedText: () => any;
			setEditorValue: (a?: any) => any;
			getEditorHTML: () => any;
			editorHasContentChanged: () => any;
			editorResetContentChanged: () => any;
			getChildIndex: (a?: any, b?: any) => any;
			getMainEditor: () => any;
			getEditorContainer: () => any;
			getEditorFrame: () => any;
			getEditorTable: () => any;
			webResourcePath: string;
			getResourceUrlPrefix: () => any;
			getTinyMceBaseUrl: () => any;
			getMinEditorHeight: () => any;
			getTinyMceEditorMinHeight: (a?: any) => any;
		}
		JiraAnalytics: {
			events: {
				paste: {
					key: string;
				}
				search: {
					key: string;
				}
				trigger: {
					key: string;
				}
				customizeColumn: {
					key: string;
				}
			}
			linkTypes: {
				jqlDirect: string;
				jql: string;
				xml: string;
				rss: string;
				filter: string;
			}
			getDisplayType: (a?: any) => any;
			setupAnalyticPanelActionObject: (a?: any, b?: any, c?: any) => any;
			setupPanelActionProperties: (a?: any, b?: any, c?: any) => any;
			triggerPasteEvent: (a?: any) => any;
			triggerPannelActionEvent: (a?: any) => any;
			triggerSearchEvent: (a?: any) => any;
			triggerMarkupEvent: (a?: any) => any;
			triggerPannelTriggerEvent: (a?: any) => any;
			triggerCustomizeColumnEvent: (a?: any) => any;
		}
		JiraConnector: {
			warningPopup: (a?: any) => any;
			closePopup: () => any;
			open: (a?: any, b?: any) => any;
			openCleanDialog: (a?: any) => any;
			edit: (a?: any) => any;
			source: {
				macroBrowser: string;
				editorBraceKey: string;
				editorHotKey: string;
				editorDropdownLink: string;
				instructionalText: string;
			}
			Panels: any[];
			clickConfigApplink: boolean;
			hotKey: () => any;
			Panel: () => any;
			Select2: {
				getKeyColumnsSelectedOptions: (a?: any) => any;
			}
		}
		JiraChart: {
			close: () => any;
			edit: (a?: any) => any;
			search: (a?: any) => any;
			disableInsert: () => any;
			enableInsert: () => any;
			disableSearch: (a?: any) => any;
			enableSearch: (a?: any) => any;
			insertJiraChartMacroWithParams: (a?: any) => any;
			open: (a?: any) => any;
			clearChartContent: (a?: any) => any;
			loadServers: (a?: any) => any;
			validateServerSupportedChart: (a?: any) => any;
			Panels: any[];
			Helper: {
				getSelectedServer: (a?: any) => any;
				bindingCommonChartElements: (a?: any) => any;
				bindingCommonDataFromMacroToForm: (a?: any, b?: any) => any;
				getCommonMacroParamsFromDialog: (a?: any, b?: any) => any;
				getCommonChartParamsRequest: (a?: any, b?: any) => any;
				convertSearchTextToJQL: (a?: any) => any;
				convertFormatWidth: (a?: any) => any;
				isChartWidthValid: (a?: any) => any;
				isNumber: (a?: any) => any;
				isJqlNotEmpty: (a?: any) => any;
				populateStatType: (a?: any, b?: any) => any;
			}
			Panel: () => any;
		}
		LinkAdapter: {
			setLink: (a?: any) => any;
			getLink: () => any;
		}
		LinkBrowser: {
			SEARCH_PANEL: string;
			ATTACHMENTS_PANEL: string;
			WEBLINK_PANEL: string;
			ADVANCED_PANEL: string;
			open: (a?: any) => any;
			cancel: () => any;
			LinkInfoPresenter: (a?: any) => any;
		}
		Autocompleter: {
			Settings: {
			}
			log: (a?: any) => any;
			Util: {
				dropdownLink: (a?: any, b?: any, c?: any) => any;
				getRestData: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any) => any;
			}
			Control: (a?: any, b?: any) => any;
			Manager: {
				getInputDrivenDropdown: () => any;
				triggerListener: (a?: any, b?: any) => any;
				shortcutFired: (a?: any, b?: any) => any;
				reattach: () => any;
			}
		}
		SearchManager: (a?: any) => any;
		CloudAppPaste: (a?: any, b?: any, c?: any) => any;
		AutoComplete: {
			SETTING_DEFAULT: {
				leadingChar: string;
				isDataValid: (a?: any) => any;
				backWords: number;
				onBeforeDie: () => any;
				onAfterStart: () => any;
				onScroll: () => any;
			}
			Manager: (a?: any) => any;
		}
		PushedNavUtil: {
			isInEditPage: () => any;
			filterPreviewHashChange: () => any;
			filterPreviewNavigationEvent: () => any;
		}
	}
	PagePermissions: {
		updateEditPageRestrictions: (a?: any, b?: any, c?: any, d?: any) => any;
	}
	progressBars: {
		update: (a?: any, b?: any) => any;
		setIndeterminate: (a?: any) => any;
	}
	Rte: {
		HIDDEN_CHAR: string;
		ZERO_WIDTH_WHITESPACE: string;
		editorId: string;
		isQuickEdit: boolean;
		getEditor: () => any;
		getCurrentBaseUrl: () => any;
		showSelection: (a?: any) => any;
		isAnyPartShown: (a?: any) => any;
		showElement: (a?: any, b?: any) => any;
		scrollTo: (a?: any) => any;
		bindScroll: (a?: any, b?: any) => any;
		unbindScroll: (a?: any) => any;
		getMainEditor: () => any;
		getEditorContainer: () => any;
		getEditorFrame: () => any;
		getEditorTable: () => any;
		webResourcePath: string;
		getResourceUrlPrefix: () => any;
		getTinyMceBaseUrl: () => any;
		getMinEditorHeight: () => any;
		getTinyMceEditorMinHeight: (a?: any) => any;
		fixEditorFocus: () => any;
		editorFocus: (a?: any) => any;
		autoformat: {
		}
		CursorTarget: {
			addFixSelector: (a?: any) => any;
		}
		Content: {
			offset: (a?: any) => any;
			getSelectedText: () => any;
			setHtml: (a?: any) => any;
			getHtml: () => any;
			isEmpty: () => any;
			editorHasContentChanged: () => any;
			editorResetContentChanged: () => any;
			getChildIndex: (a?: any, b?: any) => any;
		}
		BookmarkManager: {
			storeBookmark: () => any;
			restoreBookmark: () => any;
		}
		Support: {
			inlineTasks: () => any;
		}
		EventDelegator: (a?: any) => any;
		Cursor: {
			insertParagraph: (a?: any, b?: any, c?: any) => any;
			isCursorAtStart: (a?: any, b?: any, c?: any) => any;
			isCursorAtEnd: (a?: any, b?: any, c?: any) => any;
		}
		BootstrapManager: {
			isInitComplete: () => any;
			isEditorActive: () => any;
			onInit: () => any;
			addOnInitCallback: (a?: any) => any;
			addBeforeInitCallback: (a?: any) => any;
			addTinyMcePluginInit: (a?: any) => any;
			preInitialise: (a?: any) => any;
			initialise: (a?: any) => any;
		}
		Table: {
			convertToNormalCells: (a?: any) => any;
			convertToHeadingCells: (a?: any) => any;
			areCellsHeadings: (a?: any) => any;
			isColumnHeading: (a?: any, b?: any) => any;
			areCellsHighlighted: (a?: any) => any;
			isColumnHighlighted: (a?: any, b?: any) => any;
		}
		TablePicker: {
			bindToControl: () => any;
			disable: () => any;
			enable: () => any;
			close: () => any;
		}
		Migration: {
			Table: {
				migrateTables: (a?: any) => any;
			}
		}
		Placeholder: {
			insertTextPlaceHolder: (a?: any) => any;
			removePlaceholder: (a?: any) => any;
			addPlaceholderType: (a?: any) => any;
			getPlaceholderTypes: () => any;
			getPlaceholderType: (a?: any) => any;
			Templates: {
				textPlaceholder: (a?: any, b?: any) => any;
			}
		}
	}
	EditorUtils: {
		isCursorAtStartOf: (a?: any, b?: any) => any;
		isRangeAtStartOf: (a?: any, b?: any) => any;
		isCursorAtEndOf: (a?: any, b?: any) => any;
		isRangeAtEndOf: (a?: any, b?: any) => any;
		setCursorAtStartOfContents: (a?: any) => any;
	}
	versionDetails: {
		major: number;
		minor: number;
		bugfix: number;
		is58: boolean;
		is59: boolean;
	}
	JQLHelper: {
		isSingleKeyJQLExp: (a?: any) => any;
		isMultipleSingleKeyJQLExp: (a?: any) => any;
		isIssueUrlOrXmlUrl: (a?: any) => any;
		isFilterUrl: (a?: any) => any;
		getFilterFromFilterUrl: (a?: any) => any;
		getJqlQueryFromJiraFilter: (a?: any, b?: any, c?: any, d?: any) => any;
		findServerIndexFromUrl: (a?: any, b?: any) => any;
		getJqlQueryFromUrl: (a?: any) => any;
		getJqlAndServerIndexFromUrl: (a?: any, b?: any) => any;
		checkQueryType: (a?: any) => any;
		convertToJQL: (a?: any, b?: any) => any;
	}
	DataTable: (a?: any, b?: any, c?: any) => any;
	jiraTrigger: (a?: any, b?: any) => any;
	Keyboard: {
		SpecialKey: {
			BACKSPACE: string;
			TAB: string;
			RETURN: string;
			SHIFT: string;
			CTRL: string;
			ALT: string;
			PAUSE: string;
			CAPS_LOCK: string;
			ESC: string;
			SPACE: string;
			PAGE_UP: string;
			PAGE_DOWN: string;
			END: string;
			HOME: string;
			LEFT: string;
			UP: string;
			RIGHT: string;
			DOWN: string;
			INSERT: string;
			DELETE: string;
			F1: string;
			F2: string;
			F3: string;
			F4: string;
			F5: string;
			F6: string;
			F7: string;
			F8: string;
			F9: string;
			F10: string;
			F11: string;
			F12: string;
			NUMLOCK: string;
			SCROLL: string;
			META: string;
			eventType: () => any;
			fromKeyCode: (a?: any) => any;
			toKeyCode: (a?: any) => any;
			isAscii: (a?: any) => any;
			isSpecialKey: (a?: any) => any;
		}
		characterEntered: (a?: any) => any;
		specialKeyEntered: (a?: any) => any;
		shortcutEntered: (a?: any) => any;
	}
	Control: () => any;
	Mouse: {
		MotionDetector: () => any;
	}
	Group: () => any;
	SelectGrid: () => any;
	ResultGrid: () => any;
	EventQueue: any[];
	DragAndDropUtils: {
		defaultMimeType: string;
		base: any[];
		bindDragEnter: (a?: any, b?: any) => any;
		bindDragOver: (a?: any, b?: any) => any;
		bindDragLeave: (a?: any, b?: any) => any;
		bindDrop: (a?: any, b?: any) => any;
		niceSize: (a?: any) => any;
		ieDragEnterAndDragOverCallbackWrapper: (a?: any) => any;
		safariDragOverCallbackWrapper: (a?: any) => any;
		mozillaDropCallbackWrapper: (a?: any) => any;
		firefox35DragEnterAndOverCallbackWrapper: (a?: any) => any;
		firefox35FileDataInEvent: (a?: any) => any;
		stopPropagation: (a?: any) => any;
		preventDefault: (a?: any) => any;
		isFireFox35OrLater: () => any;
		isFireFox30: () => any;
		enableDropZoneOn: (a?: any, b?: any) => any;
	}
	ObservableArrayList: () => any;
	DragAndDropProgressDialog: (a?: any) => any;
	DragAndDrop: {
		Templates: {
			fileStatus: (a?: any, b?: any) => any;
			uploadFileStatusContainer: (a?: any, b?: any) => any;
			uploadFileStatusSuccessIcon: (a?: any, b?: any) => any;
			uploadFileStatusProgressMessage: (a?: any, b?: any) => any;
			dropZone: (a?: any, b?: any) => any;
			dragOverlay: (a?: any, b?: any) => any;
			dragAndDropTip: (a?: any, b?: any) => any;
		}
	}
	UploadUtils: {
		ErrorCode: {
			FILE_IS_A_FOLDER_ERROR: number;
		}
		filterFiles: (a?: any, b?: any, c?: any) => any;
	}
	Analytics: {
		triggerPrivacyPolicySafeEvent: (a?: any, b?: any) => any;
	}
	Popups: {
		DisplayController: {
			request: (a?: any) => any;
			render: () => any;
		}
	}
	JiraIssues: {
		Remote: {
		}
		bindOAuthLink: (a?: any, b?: any) => any;
		getOAuthRealm: (a?: any) => any;
	}
	formValidation: {
		register: (a?: any, b?: any) => any;
		validate: (a?: any) => any;
	}
	BigPipe: {
		metrics: {
			pageEnd: number;
			isBigPipeEnabled: boolean;
		}
	}
	MoveDialog: {
		Breadcrumbs: (a?: any, b?: any) => any;
		getBreadcrumbs: (a?: any, b?: any, c?: any) => any;
	}
	Breadcrumbs: {
		getBreadcrumbs: (a?: any, b?: any, c?: any) => any;
		Controller: (a?: any, b?: any) => any;
		defaultGetBreadcrumbs: (a?: any, b?: any, c?: any) => any;
	}
}

declare module "ajs-type" {
	export = AJS;
}

declare var AJS: AJSType;
