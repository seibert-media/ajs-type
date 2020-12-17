export interface AJSType {
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
		keyboardshortcutHash: string;
		isConfluenceAdmin: boolean;
		connectionTimeout: string;
		isNewUser: boolean;
		showDashboardOnboardingDialog: boolean;
		showDashboardOnboardingTips: boolean;
		userCanCreateContent: boolean;
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
	}
	populateParameters: (a?: any) => any;
	error: (...args: any[]) => any;
	log: (...args: any[]) => any;
	warn: (...args: any[]) => any;
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
	debug: (...args: any[]) => any;
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
			Meeting: {
				Notes: {
					userMention: (a?: any, b?: any) => any;
				}
			}
			pageLoadingIndicator: (a?: any, b?: any) => any;
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
		PageLoadingIndicator: (a?: any) => any;
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
	EventQueue: any[];
	Analytics: {
		triggerPrivacyPolicySafeEvent: (a?: any, b?: any) => any;
	}
	Popups: {
		DisplayController: {
			request: (a?: any) => any;
			render: () => any;
		}
	}
	versionDetails: {
		major: number;
		minor: number;
		bugfix: number;
		is58: boolean;
		is59: boolean;
	}
	JiraIssues: {
		Remote: {
		}
		bindOAuthLink: (a?: any, b?: any) => any;
		getOAuthRealm: (a?: any) => any;
	}
	dialog2: (a?: any, b?: any) => any;
	BigPipe: {
		metrics: {
			pageEnd: number;
			isBigPipeEnabled: boolean;
		}
	}
}

declare module 'ajs-type' {
	export = AJS;
}

declare var AJS: AJSType;
