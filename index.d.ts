interface AJSType {
	[key: string]: any;
	contextPath: () => any;
	deprecate: {
		fn: (a?: any, b?: any, c?: any) => any;
		construct: (a?: any, b?: any, c?: any) => any;
		css: (a?: any, b?: any) => any;
		prop: (a?: any, b?: any, c?: any) => any;
		obj: (a?: any, b?: any, c?: any) => any;
		propertyDeprecationSupported: boolean;
		getMessageLogger: (a?: any, b?: any) => any;
	};
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
		isSpaceAdmin: boolean;
		hasSpaceConfig: boolean;
		showSpaceWelcomeDialog: boolean;
		useKeyboardShortcuts: boolean;
		discoveredPluginFeatures: string;
		keyboardshortcutHash: string;
		isConfluenceAdmin: boolean;
		connectionTimeout: string;
		pageId: string;
		latestPageId: string;
		contentType: string;
		pageTitle: string;
		latestPublishedPageTitle: string;
		parentPageId: string;
		spaceKey: string;
		spaceName: string;
		maxNumberEditors: string;
		jiraMetadataCount: string;
		fromPageTitle: string;
		canRemovePage: boolean;
		canRemovePageHierarchy: boolean;
		browsePageTreeMode: string;
		sharedDrafts: boolean;
		userDisplayName: string;
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
		createIssueMetadataShowDiscovery: boolean;
		siteTitle: string;
		pageVersion: string;
		useWatch: boolean;
		attachmentSourceContentId: string;
		useInlineTasks: boolean;
		heartbeat: boolean;
		actionLocale: string;
		editorPluginResourcePrefix: string;
		editMode: string;
		userWatchingOwnContent: boolean;
		newPage: boolean;
		editorMode: string;
		autoStart: boolean;
		confRevision: string;
		syncRevisionSource: string;
		draftId: string;
		draftShareId: string;
		collaborativeEditorStatus: string;
		existingDraftId: string;
		contentId: string;
		formName: string;
		canAttachFiles: boolean;
		showDraftMessage: boolean;
		collaborativeContent: boolean;
		minEditorHeight: string;
		versionComment: string;
		draftType: string;
		synchronyToken: string;
		synchronyBaseUrl: string;
		synchronyAppId: string;
		synchronyExpiry: string;
		useXhrFallback: boolean;
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
	};
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
		keys: {};
		get: (a?: any, b?: any, c?: any) => any;
		load: (a?: any) => any;
		getText: (a?: any, b?: any) => any;
	};
	navigation: (a?: any, b?: any) => any;
	responsiveheader: {
		setup: () => any;
	};
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
	};
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
	};
	tabs: {
		setup: () => any;
		change: (a?: any) => any;
	};
	whenIType: (a?: any) => any;
	cookie: {
		erase: (a?: any) => any;
		read: (a?: any, b?: any) => any;
		save: (a?: any, b?: any, c?: any) => any;
	};
	Cookie: {
		erase: (a?: any) => any;
		read: (a?: any, b?: any) => any;
		save: (a?: any, b?: any, c?: any) => any;
	};
	flag: (a?: any) => any;
	asBooleanOrString: (a?: any) => any;
	Meta: {
		set: (a?: any, b?: any) => any;
		get: (a?: any) => any;
		getBoolean: (a?: any) => any;
		getNumber: (a?: any) => any;
		getAllAsMap: () => any;
		Links: {
			canonical: () => any;
			shortlink: () => any;
		};
	};
	DarkFeatures: {
		isEnabled: (a?: any) => any;
		enable: (a?: any) => any;
		disable: (a?: any) => any;
		getAllEnabled: () => any;
	};
	storageManager: (a?: any, b?: any) => any;
	defaultIfUndefined: (a?: any, b?: any) => any;
	debug: () => any;
	debugEnabled: (a?: any) => any;
	logError: (a?: any, b?: any) => any;
	getJSONWrap: (a?: any) => any;
	Validate: {
		email: (a?: any) => any;
		url: (a?: any) => any;
	};
	Data: {
		set: (a?: any, b?: any) => any;
		get: (a?: any) => any;
		getBoolean: (a?: any) => any;
		getNumber: (a?: any) => any;
		getAllAsMap: () => any;
		Links: {
			canonical: () => any;
			shortlink: () => any;
		};
	};
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
	};
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
		};
		hintManager: (a?: any) => any;
		debugTime: (a?: any) => any;
		debugTimeEnd: (a?: any) => any;
		Defaults: {
			maxResults: number;
		};
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
			};
			ManageWatchers: {
				dialogContent: (a?: any, b?: any) => any;
				userItem: (a?: any, b?: any) => any;
				helpLink: (a?: any, b?: any) => any;
				addWatcherForm: (a?: any, b?: any) => any;
			};
			Breadcrumbs: {
				render: (a?: any, b?: any) => any;
			};
			Labels: {
				helpLink: (a?: any, b?: any) => any;
				dialog: (a?: any, b?: any) => any;
				nolabels: (a?: any, b?: any) => any;
				dialogLabelList: (a?: any, b?: any) => any;
				dialogLabels: (a?: any, b?: any) => any;
			};
			DomFilterField: {
				form: (a?: any, b?: any) => any;
			};
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
				};
				sidebarIndexPagePopup: (a?: any, b?: any) => any;
				CreateFromTemplate: {
					macroTemplate: (a?: any, b?: any) => any;
				};
			};
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
				};
				keyboardShortcutModule: (a?: any, b?: any) => any;
				keyboardShortcutEnabledCheckbox: (a?: any, b?: any) => any;
				keyboardShortcutPanel: (a?: any, b?: any) => any;
			};
			Pagetree: {
				Macro: {
					loadingIndicator: (a?: any, b?: any) => any;
				};
			};
			pageLoadingIndicator: (a?: any, b?: any) => any;
			Hipchat: {
				Discovery: {
					integrationDialog: (a?: any, b?: any) => any;
					spaceIntegrationDialog: (a?: any, b?: any) => any;
					spaceLinkDialog: (a?: any, b?: any) => any;
				};
			};
			HipChat: {
				Presence: {
					badge: (a?: any, b?: any) => any;
					chatBar: (a?: any, b?: any) => any;
				};
			};
			Metadata: {
				JIRA: {
					metadata: (a?: any, b?: any) => any;
					featureDiscovery: (a?: any, b?: any) => any;
					nometadata: (a?: any, b?: any) => any;
					renderAuthPrompts: (a?: any, b?: any) => any;
					renderGroup: (a?: any, b?: any) => any;
					loadingMetadata: (a?: any, b?: any) => any;
					renderJiraErrors: (a?: any, b?: any) => any;
					unknownError: (a?: any, b?: any) => any;
				};
			};
			Sidebar: {
				headerStyles: (a?: any, b?: any) => any;
				sidebar: (a?: any, b?: any) => any;
				renderFavouriteSpace: (a?: any, b?: any) => any;
				renderLinks: (a?: any, b?: any) => any;
				renderCustomContent: (a?: any, b?: any) => any;
				renderLinksSection: (a?: any, b?: any) => any;
				contextualNav: (a?: any, b?: any) => any;
				pagetreeList: (a?: any, b?: any) => any;
				throbber: (a?: any, b?: any) => any;
				treeThrobber: (a?: any, b?: any) => any;
				pagetreeItem: (a?: any, b?: any) => any;
				renderSpaceToolsSection: (a?: any, b?: any) => any;
				spaceToolsMenu: (a?: any, b?: any) => any;
				configure: (a?: any, b?: any) => any;
				Pages: {
					renderPageContextualNav: (a?: any, b?: any) => any;
					childPages: (a?: any, b?: any) => any;
					currentPage: (a?: any, b?: any) => any;
					parentPage: (a?: any, b?: any) => any;
					renderChildren: (a?: any, b?: any) => any;
				};
			};
			Likes: {
				likeButton: (a?: any, b?: any) => any;
				likeSection: (a?: any, b?: any) => any;
				commentLikeSection: (a?: any, b?: any) => any;
				likesDialog: (a?: any, b?: any) => any;
				userLink: (a?: any, b?: any) => any;
			};
			User: {
				userLinkUrl: (a?: any, b?: any) => any;
				logo: (a?: any, b?: any) => any;
				usernameLink: (a?: any, b?: any) => any;
				fullNameOrAnonymous: (a?: any, b?: any) => any;
				usernameOrAnonymous: (a?: any, b?: any) => any;
			};
			Icons: {
				contentIcon: (a?: any, b?: any) => any;
				contentIconFont: (a?: any, b?: any) => any;
				iconSpan: (a?: any, b?: any) => any;
			};
			Captcha: {
				form: (a?: any, b?: any) => any;
				image: (a?: any, b?: any) => any;
			};
			Notifications: {
				notLoggedIn: (a?: any, b?: any) => any;
				actionErrors: (a?: any, b?: any) => any;
			};
			PageBanner: {
				banner: (a?: any, b?: any) => any;
				renderSystemContentItems: (a?: any, b?: any) => any;
				renderPageBannerItem: (a?: any, b?: any) => any;
				itemAnchor: (a?: any, b?: any) => any;
				itemIcon: (a?: any, b?: any) => any;
				draftStatusDiscovery: (a?: any, b?: any) => any;
			};
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
			};
			Plugins: {
				ContentReport: {
					contentReportTable: (a?: any, b?: any) => any;
				};
			};
			BrowseSpaces: {
				spacesLink: (a?: any, b?: any) => any;
			};
			LicenseBanner: {
				wrapper: (a?: any, b?: any) => any;
				expiryBanner: (a?: any, b?: any) => any;
				maintenanceBanner: (a?: any, b?: any) => any;
			};
			DialogWizard: {
				pageContainer: (a?: any, b?: any) => any;
				waitIcon: (a?: any, b?: any) => any;
			};
			Meeting: {
				Notes: {
					userMention: (a?: any, b?: any) => any;
				};
			};
			Roadmap: {
				barDialog: (a?: any, b?: any) => any;
				buildPageLink: (a?: any, b?: any) => any;
				inlineEditSaveButton: (a?: any, b?: any) => any;
				inlineEditCancelButton: (a?: any, b?: any) => any;
				toolbar: (a?: any, b?: any) => any;
				timelineOptionsForm: (a?: any, b?: any) => any;
				timeline: (a?: any, b?: any) => any;
				timelineColumn: (a?: any, b?: any) => any;
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
			};
			File: {
				fileDialogListItem: (a?: any, b?: any) => any;
				fileDialogListItemPlaceHolder: (a?: any, b?: any) => any;
				uploadFileForm: (a?: any, b?: any) => any;
				attachedFilesPanel: (a?: any, b?: any) => any;
				webPanel: (a?: any, b?: any) => any;
				searchPanel: (a?: any, b?: any) => any;
				helpLink: (a?: any, b?: any) => any;
			};
			MacroBrowser: {
				CQL: {
					sections: (a?: any, b?: any) => any;
				};
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
			};
			InsertWiki: {
				originalDefaultTempWikiMarkupDialog: (a?: any, b?: any) => any;
				previewWikiIframeContent: (a?: any, b?: any) => any;
				wikiMarkupDialog: (a?: any, b?: any) => any;
				wikiErrorSubDialog: (a?: any, b?: any) => any;
				wikiParserSelector: (a?: any, b?: any) => any;
			};
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
				};
				Toolbar: {
					toolbarButton: (a?: any, b?: any) => any;
				};
				SaveBar: {
					Watch: {
						render: (a?: any, b?: any) => any;
					};
					NotifyWatchers: {
						render: (a?: any, b?: any) => any;
					};
					VersionComment: {
						render: (a?: any, b?: any) => any;
					};
				};
				Reliable: {
					draftMessage: (a?: any, b?: any) => any;
				};
				ImageAttributes: {
					content: (a?: any, b?: any) => any;
				};
			};
			DraftChanges: {
				dialogContent: (a?: any, b?: any) => any;
				helpLink: (a?: any, b?: any) => any;
			};
			UnpublishedChanges: {
				lozenge: (a?: any, b?: any) => any;
			};
			SynchronyPresence: {
				container: (a?: any, b?: any) => any;
				avatar: (a?: any, b?: any) => any;
				overlay: (a?: any, b?: any) => any;
			};
			CollaborativeEditor: {
				StatusIndicator: {
					container: (a?: any, b?: any) => any;
				};
			};
			HipChatEmoticons: {
				Dialog: {
					emoticonDialog: (a?: any, b?: any) => any;
					confluenceEmoticons: (a?: any, b?: any) => any;
					hipchatEmoticons: (a?: any, b?: any) => any;
					genericEmoticonRepeater: (a?: any, b?: any) => any;
				};
			};
			SelectGrid: {
				gridOutline: (a?: any, b?: any) => any;
				cellWithLink: (a?: any, b?: any) => any;
				cellWithoutLink: (a?: any, b?: any) => any;
			};
			LinkBrowser: {
				searchPanel: (a?: any, b?: any) => any;
				recentlyviewedPanel: (a?: any, b?: any) => any;
				attachmentsPanel: (a?: any, b?: any) => any;
				weblinkPanel: (a?: any, b?: any) => any;
				advancedPanel: (a?: any, b?: any) => any;
				locationPanel: (a?: any, b?: any) => any;
				helpLink: (a?: any, b?: any) => any;
			};
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
			};
			Variables: {
				renderVariableItem: (a?: any, b?: any) => any;
			};
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
			};
		};
		PropertyPanel: {
			shouldCreate: boolean;
			current: {
				current: any;
			};
			getAnchor: () => any;
			createFromButtonModel: (a?: any, b?: any, c?: any, d?: any) => any;
			create: (a?: any, b?: any, c?: any, d?: any) => any;
			destroy: () => any;
			hasAnchorChanged: (a?: any) => any;
			Link: {
				name: string;
				canHandleElement: (a?: any) => any;
				handle: (a?: any) => any;
			};
			Image: {
				pluginButtons: {
					pluginButtons: any[];
				};
				name: string;
				getPresetImageSize: (a?: any) => any;
				canHandleElement: (a?: any) => any;
				handle: (a?: any) => any;
			};
			Macro: {
				name: string;
				registeredEvents: {
					registeredEvents: any[];
				};
				canHandleElement: (a?: any) => any;
				handle: (a?: any) => any;
				registerButtonHandler: (a?: any, b?: any, c?: any) => any;
				registerInitHandler: (a?: any, b?: any) => any;
				yieldButtonFor: (a?: any, b?: any) => any;
			};
			TextPlaceholder: {
				name: string;
				canHandleElement: (a?: any) => any;
				handle: (a?: any) => any;
			};
			Variable: {
				name: string;
				canHandleElement: (a?: any) => any;
				handle: (a?: any) => any;
			};
		};
		QuickNav: {
			addDropDownPostProcess: (a?: any) => any;
			setMakeParams: (a?: any) => any;
			init: (a?: any, b?: any) => any;
		};
		DomFilterField: (a?: any) => any;
		Dialogs: {
			CreateDialogBase: (a?: any) => any;
			Events: {
				ITEM_SELECTED: string;
			};
			Breadcrumbs: {
				getBreadcrumbs: (a?: any, b?: any, c?: any) => any;
				Controller: (a?: any, b?: any) => any;
				defaultGetBreadcrumbs: (a?: any, b?: any, c?: any) => any;
			};
		};
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
			};
			WelcomeDialog: {
				isShowWelcomeDialog: () => any;
				showWelcomeDialog: () => any;
			};
			CommonWizardBindings: {
				preRender: (a?: any, b?: any) => any;
				postRender: (a?: any, b?: any) => any;
				submit: (a?: any, b?: any) => any;
			};
		};
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
			};
			Selector: {
				registerSelector: (a?: any) => any;
				getSelectors: () => any;
			};
			showIndexPagePopup: (a?: any) => any;
			Dialog: {
				openDialog: (a?: any) => any;
				closeDialog: () => any;
				requestWebItems: (a?: any, b?: any) => any;
				requestSpaces: () => any;
				loadedWebitems: {};
				loadedSpaces: {};
				fillWebItemsInDialog: (a?: any, b?: any) => any;
				filterWebItems: (a?: any) => any;
				getSpaceKey: () => any;
			};
			loadDialog: (a?: any) => any;
			loadDialogAndOpenTemplate: (a?: any) => any;
		};
		Quick: {
			Create: {
				discoveryTooltip: (a?: any, b?: any) => any;
			};
		};
		KeyboardShortcuts: {
			Editor: {
				Editor: any[];
			};
			enabled: boolean;
			ready: boolean;
			dialog: {
				dialog: any;
			};
			closeDialog: () => any;
			openDialog: () => any;
			getDialog: () => any;
			Autoformat: {
				Autoformat: any[];
			};
			shortcuts: {
				shortcuts: any[];
			};
		};
		Plugins: {
			PagetreeMacro: {
				bind: (a?: any) => any;
			};
			ExpandMacro: {
				bind: (a?: any, b?: any, c?: any, d?: any) => any;
			};
			TableOfContents: {
				Client: {
					tocItemBody: (a?: any, b?: any) => any;
					listStyleTocLevelContainer: (a?: any, b?: any) => any;
					listStyleTocItemContainer: (a?: any, b?: any) => any;
					flatStyleTocItemContainer: (a?: any, b?: any) => any;
					flatStyleTocSeparator: (a?: any, b?: any) => any;
				};
			};
		};
		PageLoadingIndicator: (a?: any) => any;
		ContributorsMacro: {
			ajaxContainer: (a?: any, b?: any) => any;
			renderContent: (a?: any, b?: any) => any;
			flatLayout: (a?: any, b?: any) => any;
			listLayout: (a?: any, b?: any) => any;
			flatContributorsList: (a?: any, b?: any) => any;
			contributor: (a?: any, b?: any) => any;
		};
		EditorLoader: {
			getPreloadContainer: () => any;
			getEditorPreloadMarkup: () => any;
			resourcesLoaded: () => any;
			loadingTimeout: number;
			isEditorActive: () => any;
			load: (a?: any, b?: any) => any;
			getEditorForm: () => any;
		};
		BlockAndBuffer: {
			block: (a?: any) => any;
		};
		Sidebar: {
			Pages: {
				installHandlers: (a?: any) => any;
				quickLinksContent: () => any;
				childPageCollapsedContent: () => any;
				pageTreeCollapsedContent: () => any;
			};
			createFlyouts: (a?: any) => any;
			collapseTooltip: string;
			expandTooltip: string;
			throbberDiv: () => any;
			applyTooltip: (a?: any, b?: any) => any;
			toggle: () => any;
			Configure: {
				mode: boolean;
				Logo: {
					unbind: () => any;
				};
			};
		};
		ConfigurableNav: () => any;
		Likes: {
			getLikesCache: () => any;
			showLikeUsers: (a?: any) => any;
			appendAction: (a?: any) => any;
			reload: (a?: any) => any;
			updateComment: (a?: any, b?: any) => any;
			LikeSummaryFactory: {
				getLikeSummary: (a?: any, b?: any, c?: any) => any;
			};
		};
		FeatureDiscovery: {
			forPlugin: (a?: any, b?: any) => any;
		};
		Comments: {
			bindRemoveConfirmation: (a?: any) => any;
		};
		CommentDisplayManager: {
			addComment: (a?: any, b?: any, c?: any, d?: any) => any;
			addOrUpdateComment: (a?: any, b?: any, c?: any, d?: any) => any;
			isVisible: () => any;
			hasComments: () => any;
			commentCount: () => any;
			clearFocus: () => any;
			getCommentNode: (a?: any) => any;
			getParentId: (a?: any) => any;
		};
		DocThemeUtils: {
			isDocTheme: () => any;
			appendAbsolutePositionedElement: (a?: any) => any;
			getMainContentScrollTop: () => any;
			getMainContentScrollLeft: () => any;
			getDocThemeContentElement: () => any;
		};
		ScrollingInlineDialog: (a?: any, b?: any, c?: any, d?: any) => any;
		HighlightAction: {
			registerButtonHandler: (a?: any, b?: any) => any;
			getButtonHandler: (a?: any) => any;
			insertContentAtSelectionEnd: (a?: any) => any;
			insertContentsInTableColumnCells: (a?: any) => any;
			createTableInsertionBean: (a?: any, b?: any, c?: any) => any;
			createInsertionBean: (a?: any, b?: any) => any;
			createXMLModificationBean: (a?: any, b?: any) => any;
			clearTextSelection: () => any;
			WORKING_AREA: {
				MAINCONTENT_AND_COMMENT: (a?: any) => any;
				MAINCONTENT_ONLY: (a?: any) => any;
				COMMENT_ONLY: (a?: any) => any;
			};
			RangeHelper: {
				getRangeOption: (a?: any) => any;
				getUserSelectionRange: () => any;
				getSelectionRects: (a?: any) => any;
				getSelectionText: (a?: any) => any;
				getSelectionHTML: (a?: any) => any;
				getContainingElement: (a?: any) => any;
				getFirstAndLastSelectionRect: (a?: any, b?: any) => any;
				isSelectionInsideContent: (a?: any, b?: any) => any;
				computeSearchTextObject: (a?: any, b?: any) => any;
			};
			Analytics: {
				sendAnalyticsForOpeningHighlightOptionPanel: () => any;
				sendAnalyticsForQuoteInComment: (a?: any) => any;
			};
		};
		HighlightPanel: {
			Templates: {
				panelContent: (a?: any, b?: any) => any;
			};
		};
		Blueprints: {
			SharelinksUrlMacro: {
				bookmarkletLink: (a?: any, b?: any) => any;
				bookmarkletScript: (a?: any, b?: any) => any;
			};
			Common: {
				Index: {
					detailsSummaryMacro: (a?: any, b?: any) => any;
					createFromTemplateMacro: (a?: any, b?: any) => any;
				};
			};
			Meeting: {
				Notes: {
					howTo: (a?: any, b?: any) => any;
				};
			};
		};
		InlineTasks: {
			Notice: (a?: any) => any;
			Templates: {
				notice: (a?: any, b?: any) => any;
			};
			TasksTableSortable: (a?: any) => any;
			Report: {
				Templates: {
					tasksReport: (a?: any, b?: any) => any;
					tasksFeatureDiscoveryNotification: (a?: any, b?: any) => any;
					tasksReportLine: (a?: any, b?: any) => any;
					taskReportBrowserWarning: (a?: any, b?: any) => any;
					taskReportWarning: (a?: any, b?: any) => any;
				};
			};
			TasksReport: {
				renderBlankExperiences: (a?: any, b?: any) => any;
			};
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
				};
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
				};
				addContentEditableIfApplicable: (a?: any) => any;
			};
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
				};
				PATTERN_INSERTING_ALTERNATE: string;
			};
		};
		UI: {
			Components: {
				Pagination: {
					build: (a?: any) => any;
					Templates: {
						paginationFooter: (a?: any, b?: any) => any;
					};
				};
				BlankPlaceholderBox: {
					Templates: {
						blankBox: (a?: any, b?: any) => any;
					};
				};
				SpacePicker: {
					build: () => any;
					filterMixedTypesForValues: (a?: any, b?: any) => any;
				};
				SpacePagePicker: {
					build: () => any;
					setValue: (a?: any, b?: any) => any;
				};
				templates: {
					hiddenField: (a?: any, b?: any) => any;
				};
				PagePicker: {
					build: () => any;
				};
				LabelPicker: {
					build: () => any;
					templates: {
						labelResult: (a?: any, b?: any) => any;
						labelInvalid: (a?: any, b?: any) => any;
					};
				};
				UserGroupSelect2: {
					avatarWithName: (a?: any, b?: any) => any;
				};
				CQL: {
					Templates: {
						container: (a?: any, b?: any) => any;
					};
					FilterSelect: {
						Templates: {
							container: (a?: any, b?: any) => any;
						};
					};
					TypePicker: {
						templates: {
							suggestions: (a?: any, b?: any) => any;
						};
					};
					SpaceField: {
						templates: {
							archivedSpacesOption: (a?: any, b?: any) => any;
						};
					};
				};
				CQLFilters: {
					Templates: {
						baseFilterField: (a?: any, b?: any) => any;
					};
				};
				DatePicker: {
					templates: {
						input: (a?: any, b?: any) => any;
					};
				};
			};
		};
		FileTypesUtils: {
			getAUIIconFromMime: (a?: any) => any;
			isImage: (a?: any) => any;
		};
		ViewFileMacro: {
			Templates: {
				embeddedFile: (a?: any, b?: any) => any;
				embeddedUnknownFile: (a?: any, b?: any) => any;
				overlayEmbeddedFile: (a?: any, b?: any) => any;
				overlayEmbeddedFileCommentCount: (a?: any, b?: any) => any;
				overlayEmbeddedFileFileTypeDesc: (a?: any, b?: any) => any;
				Editor: {
					viewFilePropertyPanelHeader: (a?: any, b?: any) => any;
				};
			};
		};
		Editor: {
			PushedNavUtil: {
				isInEditPage: () => any;
				filterPreviewHashChange: () => any;
				filterPreviewNavigationEvent: () => any;
			};
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
				};
				AttachmentsPanelView: () => any;
				ExternalPanelView: () => any;
				SearchPanelView: () => any;
				FileDialogView: () => any;
			};
			bookmark: string;
			MODE_RICHTEXT: string;
			MODE_SOURCE: string;
			MODE_PREVIEW: string;
			PREVIEW_OUTPUT_TYPE: string;
			currentEditMode: {
				currentEditMode: any;
			};
			contentHasChangedSinceLastSave: boolean;
			sourceInitialValue: boolean;
			isPublishing: (a?: any) => any;
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
				cleanup: () => any;
			};
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
				beforeShowListeners: {
					beforeShowListeners: any[];
				};
				panelComponent: {
					panelComponent: any[];
				};
				sizeToFit: () => any;
				defaultInsertImageDialog: () => any;
				findPanelComponentById: (a?: any) => any;
				insertImageDialog: (a?: any, b?: any) => any;
			};
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
				getDraftSavingPromise: () => any;
			};
			Toolbar: {
				Components: {
					Button: (a?: any) => any;
					DropDownButton: (a?: any) => any;
					TextButton: (a?: any) => any;
					TextBox: (a?: any) => any;
					Group: (a?: any, b?: any) => any;
					SplitGroup: (a?: any, b?: any) => any;
				};
			};
			regex: {
				URL: {
					exec: (a?: any) => any;
					test: (a?: any) => any;
				};
				EMAIL: {
					exec: (a?: any) => any;
					test: (a?: any) => any;
				};
			};
			ImageProps: {
				init: () => any;
				registerPanel: (a?: any, b?: any, c?: any, d?: any) => any;
			};
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
			};
			Autocompleter: {
				Settings: {};
				log: (a?: any) => any;
				Util: {
					dropdownLink: (a?: any, b?: any, c?: any) => any;
					getRestData: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any) => any;
				};
				Control: (a?: any, b?: any) => any;
				Manager: {
					getInputDrivenDropdown: () => any;
					triggerListener: (a?: any, b?: any) => any;
					shortcutFired: (a?: any, b?: any) => any;
					reattach: () => any;
				};
			};
			SearchManager: (a?: any) => any;
			AutoComplete: {
				SETTING_DEFAULT: {
					leadingChar: string;
					isDataValid: (a?: any) => any;
					backWords: number;
					onBeforeDie: () => any;
					onAfterStart: () => any;
					onScroll: () => any;
				};
				Manager: (a?: any) => any;
			};
			LinkAdapter: {
				setLink: (a?: any) => any;
				getLink: () => any;
			};
			LinkBrowser: {
				SEARCH_PANEL: string;
				ATTACHMENTS_PANEL: string;
				WEBLINK_PANEL: string;
				ADVANCED_PANEL: string;
				open: (a?: any) => any;
				cancel: () => any;
				LinkInfoPresenter: (a?: any) => any;
			};
			CloudAppPaste: (a?: any, b?: any, c?: any) => any;
			JiraAnalytics: {
				events: {
					paste: {
						key: string;
					};
					search: {
						key: string;
					};
					trigger: {
						key: string;
					};
					customizeColumn: {
						key: string;
					};
				};
				linkTypes: {
					jqlDirect: string;
					jql: string;
					xml: string;
					rss: string;
					filter: string;
				};
				getDisplayType: (a?: any) => any;
				setupAnalyticPanelActionObject: (a?: any, b?: any, c?: any) => any;
				setupPanelActionProperties: (a?: any, b?: any, c?: any) => any;
				triggerPasteEvent: (a?: any) => any;
				triggerPannelActionEvent: (a?: any) => any;
				triggerSearchEvent: (a?: any) => any;
				triggerMarkupEvent: (a?: any) => any;
				triggerPannelTriggerEvent: (a?: any) => any;
				triggerCustomizeColumnEvent: (a?: any) => any;
			};
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
				};
				Panels: {
					Panels: any[];
				};
				clickConfigApplink: boolean;
				hotKey: () => any;
				Panel: () => any;
				Select2: {
					getKeyColumnsSelectedOptions: (a?: any) => any;
				};
			};
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
				Panels: {
					Panels: any[];
				};
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
				};
				Panel: () => any;
			};
		};
		QuickEdit: {
			loadingContentTimeout: number;
			register: (a?: any) => any;
			disableHandlers: () => any;
			enableHandlers: () => any;
			SaveBarBinder: {
				bind: (a?: any, b?: any) => any;
			};
			activateEditor: (a?: any) => any;
			deactivateEditor: () => any;
			KeyboardShortcuts: {
				createShortcut: (a?: any, b?: any) => any;
			};
			QuickEditPage: {
				disable: () => any;
			};
			QuickComment: {
				timeout: number;
				showLoadingEditorErrorMessage: () => any;
				preInitialise: () => any;
				postInitialise: (a?: any) => any;
				delegatingSaveCommentHandler: (a?: any) => any;
				reloadPageSaveCommentHandler: (a?: any) => any;
				ajaxSaveCommentHandler: (a?: any) => any;
				cancelHandler: () => any;
				createCommenterParam: (a?: any, b?: any, c?: any) => any;
				createSaveHandler: (a?: any, b?: any) => any;
				saveCommentErrorHandler: (a?: any) => any;
				cancelComment: () => any;
				proceedWithActivation: () => any;
				TopLevel: {
					bindCommentAreaFallbackHandler: () => any;
					cancelComment: () => any;
				};
				Reply: {
					cancelComment: () => any;
				};
				Edit: {
					cancelComment: () => any;
				};
			};
		};
		Analytics: {
			setAnalyticsSource: (a?: any, b?: any) => any;
			srcRemovedUrl: (a?: any) => any;
			srcParamValues: (a?: any) => any;
			srcAttrParamValues: (a?: any) => any;
			extractAnalyticsData: (a?: any) => any;
			publish: (a?: any, b?: any) => any;
			init: () => any;
		};
		QuickEditCaptchaManager: (a?: any) => any;
		Watch: {
			Templates: {
				dialogBody: (a?: any, b?: any) => any;
			};
		};
		DialogWizard: (a?: any, b?: any) => any;
		RoadmapLink: {
			addCreateLinkPageListener: (a?: any, b?: any) => any;
		};
		Roadmap: {
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
			};
			Helper: {
				getPosXOnMonthTimeline: (a?: any, b?: any) => any;
				getPosXOnWeekTimeline: (a?: any, b?: any) => any;
				getWidthTimeline: (a?: any, b?: any) => any;
				getMonthStartDateByPosition: (a?: any, b?: any) => any;
				getWeekStartDateByPosition: (a?: any, b?: any) => any;
				guid: () => any;
			};
			ColorHelper: {
				resetColorCounts: () => any;
				findColor: (a?: any) => any;
				adjustColorCount: (a?: any, b?: any) => any;
				getColor: () => any;
			};
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
			};
			FieldUtilities: {
				fixDatePickerFields: (a?: any) => any;
			};
		};
		CreateJiraContent: {
			Dialogs: {
				appendDialogTarget: (a?: any, b?: any) => any;
			};
		};
		Request: {
			Access: {
				usernameLink: (a?: any, b?: any) => any;
				loading: (a?: any, b?: any) => any;
				dialog: (a?: any, b?: any) => any;
			};
		};
		Grant: {
			Access: {
				dialog: (a?: any, b?: any) => any;
				usernameLink: (a?: any, b?: any) => any;
			};
		};
		MacroParameterSerializer: {
			serialize: (a?: any) => any;
			deserialize: (a?: any) => any;
		};
		PageLocation: {
			get: () => any;
			set: (a?: any) => any;
		};
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
		};
		DragAndDrop: {
			UploadClientController: (a?: any) => any;
			UploadClient: (a?: any) => any;
		};
	};
	Position: {
		spaceAboveBelow: (a?: any, b?: any) => any;
	};
	inputDrivenDropdown: (a?: any) => any;
	followCallbacks: {
		followCallbacks: any[];
	};
	favouriteCallbacks: {
		favouriteCallbacks: any[];
	};
	moreLinkClickHandler: (a?: any) => any;
	safe: {
		ajax: (a?: any) => any;
		get: (a?: any, b?: any, c?: any, d?: any) => any;
		getScript: (a?: any, b?: any) => any;
		getJSON: (a?: any, b?: any, c?: any) => any;
		post: (a?: any, b?: any, c?: any, d?: any) => any;
	};
	safeAjax: (a?: any) => any;
	General: {
		getContextPath: () => any;
		getBaseUrl: () => any;
	};
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
		};
		setLabelError: (a?: any) => any;
		parseLabelStringToArray: (a?: any) => any;
		getLabelLink: (a?: any, b?: any) => any;
		setLabelsInputField: (a?: any) => any;
		getLabelsInputField: () => any;
		bindOpenDialog: (a?: any) => any;
		openDialog: (a?: any) => any;
		updateDialogLabelList: (a?: any) => any;
	};
	getWindowQueryParams: () => any;
	Tooltip: (a?: any) => any;
	bindEvt: () => any;
	triggerEvt: () => any;
	triggerEvtForInst: () => any;
	RestfulTable: () => any;
	dialog2: (a?: any, b?: any) => any;
	tablessortable: {
		setup: () => any;
		setTableSortable: (a?: any) => any;
	};
	HelpTip: (a?: any) => any;
	Templates: {
		HelpTip: {
			tipContent: (a?: any, b?: any) => any;
			tipDismiss: (a?: any, b?: any) => any;
		};
	};
	progressBars: {
		update: (a?: any, b?: any) => any;
		setIndeterminate: (a?: any) => any;
	};
	DragAndDropUtils: {
		defaultMimeType: string;
		base: {
			base: any[];
		};
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
	};
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
		};
	};
	UploadUtils: {
		ErrorCode: {
			FILE_IS_A_FOLDER_ERROR: number;
		};
		filterFiles: (a?: any, b?: any, c?: any) => any;
	};
	InlineDialog2: () => any;
	EventQueue: {
		EventQueue: any[];
	};
	Analytics: {
		triggerPrivacyPolicySafeEvent: (a?: any, b?: any) => any;
	};
	Popups: {
		DisplayController: {
			request: (a?: any) => any;
			render: () => any;
		};
	};
	versionDetails: {
		major: number;
		minor: number;
		bugfix: number;
		is58: boolean;
		is59: boolean;
	};
	JiraIssues: {
		Remote: {};
		bindOAuthLink: (a?: any, b?: any) => any;
		getOAuthRealm: (a?: any) => any;
	};
	BigPipe: {
		metrics: {
			pageEnd: number;
			isBigPipeEnabled: boolean;
		};
	};
	AppLinksInitialisationBinder: (a?: any) => any;
	DatePicker: (a?: any, b?: any) => any;
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
		};
		Field: (a?: any, b?: any, c?: any) => any;
		activateSmartFieldsAttachmentsOnPage: (a?: any, b?: any) => any;
		Utils: {
			makeDefaultKey: () => any;
		};
		Editor: {
			loadMacroInBrowser: (a?: any) => any;
			getMacroParametersFromForm: (a?: any) => any;
			getMacroDefinitionFromForm: (a?: any) => any;
			processRequiredParameters: () => any;
		};
		Preview: {
			previewMacro: (a?: any, b?: any) => any;
			removePreviewContainer: () => any;
		};
		Model: {
			loadMacros: (a?: any) => any;
			transformMetaDataDefault: (a?: any) => any;
		};
		Rest: {
			loadMacroMetadata: (a?: any) => any;
			fetchMacroMetadataDetails: (a?: any) => any;
			fetchMacroPreviewData: (a?: any) => any;
		};
		UI: {
			createDialog: (a?: any) => any;
			showBrowserSpinner: (a?: any) => any;
			showPreviewSpinner: (a?: any) => any;
			updateButtonText: (a?: any) => any;
			enableSaveButton: (a?: any) => any;
			focusOnMacroDetailsFirstInput: () => any;
			setHelpLink: (a?: any, b?: any) => any;
		};
		reset: () => any;
		getMacroJsOverride: (a?: any) => any;
		setMacroJsOverride: (a?: any, b?: any) => any;
		Macros: {
			code: {};
			viewdoc: {
				fileTypes: {
					fileTypes: any[];
				};
			};
			viewpdf: {
				fileTypes: {
					fileTypes: any[];
				};
			};
			viewxls: {
				fileTypes: {
					fileTypes: any[];
				};
			};
			viewppt: {
				fileTypes: {
					fileTypes: any[];
				};
			};
			viewfile: {
				updateSelectedMacro: (a?: any) => any;
			};
			'create-from-template': {
				fields: {
					spacekey: {
						spaceKey: (a?: any) => any;
					};
				};
				beforeParamsSet: (a?: any, b?: any) => any;
				beforeParamsRetrieved: (a?: any, b?: any, c?: any) => any;
			};
			'tasks-report-macro': {
				fields: {
					string: {
						spaceAndPage: (a?: any) => any;
					};
				};
				beforeParamsSet: (a?: any) => any;
				beforeParamsRetrieved: (a?: any) => any;
			};
			roadmap: {
				opener: (a?: any) => any;
			};
			'view-file': {
				opener: (a?: any) => any;
			};
			gadget: {
				postPreview: (a?: any, b?: any) => any;
				beforeParamsSet: (a?: any, b?: any) => any;
				updateMacroParametersForPreview: (a?: any) => any;
				manipulateMarkup: (a?: any) => any;
				getMacroDetailsFromSelectedMacro: (a?: any, b?: any) => any;
				beforeParamsRetrieved: (a?: any, b?: any, c?: any) => any;
			};
			jira: {
				opener: (a?: any) => any;
			};
			jiraissues: {
				opener: (a?: any) => any;
			};
			jirachart: {
				opener: (a?: any) => any;
			};
			multimedia: {
				fileTypes: {
					fileTypes: any[];
				};
			};
		};
		hasInit: boolean;
		metadataList: {
			metadataList: any[];
		};
		aliasMap: {
			'web-widget': string;
			'fav-pages': string;
			'spaces-list': string;
			dynamictasklist: string;
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
		};
		fields: {};
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
			macros: {
				macros: any[];
			};
			insertTitle: string;
			editTitle: string;
			categories: {
				categories: any[];
			};
			title: string;
		};
	};
	Editor: {
		PushedNavUtil: {
			isInEditPage: () => any;
			filterPreviewHashChange: () => any;
			filterPreviewNavigationEvent: () => any;
		};
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
			};
			AttachmentsPanelView: () => any;
			ExternalPanelView: () => any;
			SearchPanelView: () => any;
			FileDialogView: () => any;
		};
		bookmark: string;
		MODE_RICHTEXT: string;
		MODE_SOURCE: string;
		MODE_PREVIEW: string;
		PREVIEW_OUTPUT_TYPE: string;
		currentEditMode: {
			currentEditMode: any;
		};
		contentHasChangedSinceLastSave: boolean;
		sourceInitialValue: boolean;
		isPublishing: (a?: any) => any;
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
			cleanup: () => any;
		};
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
			beforeShowListeners: {
				beforeShowListeners: any[];
			};
			panelComponent: {
				panelComponent: any[];
			};
			sizeToFit: () => any;
			defaultInsertImageDialog: () => any;
			findPanelComponentById: (a?: any) => any;
			insertImageDialog: (a?: any, b?: any) => any;
		};
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
			getDraftSavingPromise: () => any;
		};
		Toolbar: {
			Components: {
				Button: (a?: any) => any;
				DropDownButton: (a?: any) => any;
				TextButton: (a?: any) => any;
				TextBox: (a?: any) => any;
				Group: (a?: any, b?: any) => any;
				SplitGroup: (a?: any, b?: any) => any;
			};
		};
		regex: {
			URL: {
				exec: (a?: any) => any;
				test: (a?: any) => any;
			};
			EMAIL: {
				exec: (a?: any) => any;
				test: (a?: any) => any;
			};
		};
		ImageProps: {
			init: () => any;
			registerPanel: (a?: any, b?: any, c?: any, d?: any) => any;
		};
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
		};
		Autocompleter: {
			Settings: {};
			log: (a?: any) => any;
			Util: {
				dropdownLink: (a?: any, b?: any, c?: any) => any;
				getRestData: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any) => any;
			};
			Control: (a?: any, b?: any) => any;
			Manager: {
				getInputDrivenDropdown: () => any;
				triggerListener: (a?: any, b?: any) => any;
				shortcutFired: (a?: any, b?: any) => any;
				reattach: () => any;
			};
		};
		SearchManager: (a?: any) => any;
		AutoComplete: {
			SETTING_DEFAULT: {
				leadingChar: string;
				isDataValid: (a?: any) => any;
				backWords: number;
				onBeforeDie: () => any;
				onAfterStart: () => any;
				onScroll: () => any;
			};
			Manager: (a?: any) => any;
		};
		LinkAdapter: {
			setLink: (a?: any) => any;
			getLink: () => any;
		};
		LinkBrowser: {
			SEARCH_PANEL: string;
			ATTACHMENTS_PANEL: string;
			WEBLINK_PANEL: string;
			ADVANCED_PANEL: string;
			open: (a?: any) => any;
			cancel: () => any;
			LinkInfoPresenter: (a?: any) => any;
		};
		CloudAppPaste: (a?: any, b?: any, c?: any) => any;
		JiraAnalytics: {
			events: {
				paste: {
					key: string;
				};
				search: {
					key: string;
				};
				trigger: {
					key: string;
				};
				customizeColumn: {
					key: string;
				};
			};
			linkTypes: {
				jqlDirect: string;
				jql: string;
				xml: string;
				rss: string;
				filter: string;
			};
			getDisplayType: (a?: any) => any;
			setupAnalyticPanelActionObject: (a?: any, b?: any, c?: any) => any;
			setupPanelActionProperties: (a?: any, b?: any, c?: any) => any;
			triggerPasteEvent: (a?: any) => any;
			triggerPannelActionEvent: (a?: any) => any;
			triggerSearchEvent: (a?: any) => any;
			triggerMarkupEvent: (a?: any) => any;
			triggerPannelTriggerEvent: (a?: any) => any;
			triggerCustomizeColumnEvent: (a?: any) => any;
		};
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
			};
			Panels: {
				Panels: any[];
			};
			clickConfigApplink: boolean;
			hotKey: () => any;
			Panel: () => any;
			Select2: {
				getKeyColumnsSelectedOptions: (a?: any) => any;
			};
		};
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
			Panels: {
				Panels: any[];
			};
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
			};
			Panel: () => any;
		};
	};
	PagePermissions: {
		updateEditPageRestrictions: (a?: any, b?: any, c?: any, d?: any) => any;
	};
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
		autoformat: {};
		CursorTarget: {
			addFixSelector: (a?: any) => any;
		};
		Content: {
			offset: (a?: any) => any;
			getSelectedText: () => any;
			setHtml: (a?: any) => any;
			getHtml: () => any;
			isEmpty: () => any;
			editorHasContentChanged: () => any;
			editorResetContentChanged: () => any;
			getChildIndex: (a?: any, b?: any) => any;
		};
		BookmarkManager: {
			storeBookmark: () => any;
			restoreBookmark: () => any;
		};
		Support: {
			inlineTasks: () => any;
			isCollaborativeContentType: () => any;
		};
		EventDelegator: (a?: any) => any;
		Cursor: {
			insertParagraph: (a?: any, b?: any, c?: any) => any;
			isCursorAtStart: (a?: any, b?: any, c?: any) => any;
			isCursorAtEnd: (a?: any, b?: any, c?: any) => any;
		};
		BootstrapManager: {
			isInitComplete: () => any;
			isEditorActive: () => any;
			onInit: () => any;
			addOnInitCallback: (a?: any) => any;
			addBeforeInitCallback: (a?: any) => any;
			addTinyMcePluginInit: (a?: any) => any;
			preInitialise: (a?: any) => any;
			initialise: (a?: any) => any;
		};
		Table: {
			convertToNormalCells: (a?: any) => any;
			convertToHeadingCells: (a?: any) => any;
			areCellsHeadings: (a?: any) => any;
			isColumnHeading: (a?: any, b?: any) => any;
			areCellsHighlighted: (a?: any) => any;
			isColumnHighlighted: (a?: any, b?: any) => any;
		};
		TablePicker: {
			bindToControl: () => any;
			disable: () => any;
			enable: () => any;
			close: () => any;
		};
		Migration: {
			Table: {
				migrateTables: (a?: any) => any;
			};
		};
		Placeholder: {
			insertTextPlaceHolder: (a?: any) => any;
			removePlaceholder: (a?: any) => any;
			addPlaceholderType: (a?: any) => any;
			getPlaceholderTypes: () => any;
			getPlaceholderType: (a?: any) => any;
			Templates: {
				textPlaceholder: (a?: any, b?: any) => any;
			};
		};
	};
	EditorUtils: {
		isCursorAtStartOf: (a?: any, b?: any) => any;
		isRangeAtStartOf: (a?: any, b?: any) => any;
		isCursorAtEndOf: (a?: any, b?: any) => any;
		isRangeAtEndOf: (a?: any, b?: any) => any;
		setCursorAtStartOfContents: (a?: any) => any;
	};
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
		};
		characterEntered: (a?: any) => any;
		specialKeyEntered: (a?: any) => any;
		shortcutEntered: (a?: any) => any;
	};
	Control: () => any;
	Mouse: {
		MotionDetector: () => any;
	};
	Group: () => any;
	SelectGrid: () => any;
	ResultGrid: () => any;
	MoveDialog: {
		Breadcrumbs: (a?: any, b?: any) => any;
		getBreadcrumbs: (a?: any, b?: any, c?: any) => any;
	};
	Breadcrumbs: {
		getBreadcrumbs: (a?: any, b?: any, c?: any) => any;
		Controller: (a?: any, b?: any) => any;
		defaultGetBreadcrumbs: (a?: any, b?: any, c?: any) => any;
	};
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
	};
	DataTable: (a?: any, b?: any, c?: any) => any;
	SummaryHelper: {
		getCurrentParams: (a?: any) => any;
		getParam: (a?: any, b?: any) => any;
		updateMacro: (a?: any, b?: any, c?: any, d?: any) => any;
	};
}
declare module "ajs-type" {
	export = AJS;
}
declare var AJS: AJSType;
