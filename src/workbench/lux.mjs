export default syntax => ({
   name: "Noctis Lux",
   type: "light",
   colors: {
      // ---------------------------
      // Editor Base Colors
      // ---------------------------
      "selection.background": "#ade2eb88",
      descriptionForeground: "#929ea0",
      errorForeground: "#ff4000",
      "widget.shadow": "#00000055",
      "editor.background": "#fef8ec",
      "editor.foreground": "#005661",
      "editorLineNumber.foreground": "#a0abac",
      "editorLineNumber.activeForeground": "#0099ad",
      "editorCursor.foreground": "#0092a8",
      // ---------------------------
      // Badge
      // ---------------------------
      "badge.background": "#0099ad",
      "badge.foreground": "#fef8ec",
      // ---------------------------
      // Activity Bar
      // ---------------------------
      "activityBar.background": "#fef8ec",
      "activityBar.dropBackground": "#0099ad65",
      "activityBar.foreground": "#0099ad",
      "activityBar.border": "#ece2c600",
      "activityBarBadge.background": "#0099ad",
      "activityBarBadge.foreground": "#fef8ec",
      // ---------------------------
      // Sidebar
      // ---------------------------
      "sideBar.background": "#f8efdd",
      "sideBar.foreground": "#888477",
      "sideBar.border": "#ece2c600",
      "sideBar.dropBackground": "#f8efdd",
      "sideBarTitle.foreground": "#888477",
      "sideBarSectionHeader.background": "#f0e3c2",
      "sideBarSectionHeader.foreground": "#888477",
      // ---------------------------
      // Status Bar
      // ---------------------------
      "statusBar.background": "#ebe4d1",
      "statusBar.foreground": "#0099ad",
      "statusBar.border": "#ece2c600",
      "statusBar.debuggingBackground": "#f8efdd",
      "statusBar.debuggingForeground": "#e9498150",
      "statusBar.debuggingBorder": "#e94981af",
      "statusBar.noFolderForeground": "#87a7ab",
      "statusBar.noFolderBackground": "#f8efdd",
      "statusBar.noFolderBorder": "#f8efdd",
      "statusBarItem.activeBackground": "#dfeff1",
      "statusBarItem.hoverBackground": "#d1e8eb",
      "statusBarItem.prominentBackground": "#c1d4d7",
      "statusBarItem.prominentHoverBackground": "#bfdee3",
      // ---------------------------
      // Button
      // ---------------------------
      "button.background": "#099",
      "button.foreground": "#f1f1f1",
      "button.hoverBackground": "#0cc",
      // ---------------------------
      // Dropdown
      // ---------------------------
      "dropdown.background": "#fef8ec",
      "dropdown.border": "#fef8ec",
      "dropdown.foreground": "#005661",
      // ---------------------------
      // Editor Marker Navigation
      // ---------------------------
      "editorMarkerNavigation.background": "#3a3a5e29",
      "editorMarkerNavigationError.background": "#ff4000",
      "editorMarkerNavigationWarning.background": "#e69533",
      // ---------------------------
      // Errors and warnings
      // ---------------------------
      "editorError.border": "#fef8ec",
      "editorError.foreground": "#ff4000",
      "editorWarning.border": "#fef8ec",
      "editorWarning.foreground": "#e69533",
      "editorInfo.border": "#fef8ec",
      "editorInfo.foreground": "#00c6e0",
      "editorHint.border": "#58cc6d80",
      "editorHint.foreground": "#58cc6d",
      // ---------------------------
      // Editor Groups and Tabs
      // ---------------------------
      "editorGroup.emptyBackground": "#b8ae9333",
      "editorGroup.border": "#f0e7d1",
      "editorGroup.dropBackground": "#b8ae9333",
      // ---------------------------
      // Editor Group Header
      // ---------------------------
      "editorGroupHeader.noTabsBackground": "#ebe4d1",
      "editorGroupHeader.tabsBackground": "#ebe4d1",
      "editorGroupHeader.tabsBorder": "#ebe4d100",
      // ---------------------------
      // Editor Tabs
      // ---------------------------
      "tab.activeBackground": "#fef8ec",
      "tab.activeForeground": "#0099ad",
      "tab.border": "#e6d7b2",
      "tab.inactiveBackground": "#ebe4d1",
      "tab.inactiveForeground": "#888477",
      "tab.unfocusedActiveForeground": "#888477",
      "tab.unfocusedInactiveForeground": "#888477",
      "tab.activeBorderTop": "#00c6e0",
      "tab.activeModifiedBorder": "#00b368",
      // ---------------------------
      // Text Colors
      // ---------------------------
      "textBlockQuote.background": "#f8efdd",
      "textBlockQuote.border": "#00899e",
      "textCodeBlock.background": "#f8efdd",
      "textLink.activeForeground": "#00c6e0",
      "textLink.foreground": "#00c6e0",
      "textPreformat.foreground": "#e9a149",
      "textSeparator.foreground": "#f8efdd",
      // ---------------------------
      // Welcome Page
      // ---------------------------
      "walkThrough.embeddedEditorBackground": "#f8efdd",
      "welcomePage.buttonBackground": "#f8efdd",
      "welcomePage.buttonHoverBackground": "#e1e0d0",
      // ---------------------------
      // Input Control
      // ---------------------------
      "input.background": "#fef8ec",
      "input.border": "#f2edde",
      "input.foreground": "#6a7a7c",
      "input.placeholderForeground": "#9fabad",
      "inputOption.activeBorder": "#0099ad",
      "inputValidation.errorBackground": "#ff400041",
      "inputValidation.errorBorder": "#ff4000",
      "inputValidation.infoBackground": "#00c6e0cc",
      "inputValidation.infoBorder": "#00c6e0",
      "inputValidation.warningBackground": "#ffa587cc",
      "inputValidation.warningBorder": "#ffa487",
      // ---------------------------
      // Editor Widgets
      // ---------------------------
      "editorWidget.background": "#f2edde",
      "editorWidget.border": "#ece2c600",
      "editorHoverWidget.background": "#f2edde",
      "editorHoverWidget.border": "#ece2c600",
      "editorSuggestWidget.background": "#f2edde",
      "editorSuggestWidget.border": "#ece2c600",
      "editorSuggestWidget.foreground": "#6a7a7c",
      "editorSuggestWidget.highlightForeground": "#0099ad",
      "editorSuggestWidget.selectedBackground": "#dbfaff",
      // ---------------------------
      // Gutter
      // ---------------------------
      "editorGutter.background": "#fef8ec",
      "editorGutter.addedBackground": "#8ce99a",
      "editorGutter.deletedBackground": "#ff4000",
      "editorGutter.modifiedBackground": "#e9a149",
      // ---------------------------
      // Selection Colors
      // ---------------------------
      "editor.selectionBackground": "#ade2eb77",
      "editor.selectionHighlightBackground": "#929ea03b",
      "editor.selectionHighlightBorder": "#14a5ff55",
      "editor.inactiveSelectionBackground": "#ade2eb55",
      "editor.wordHighlightStrongBackground": "#b5890027",
      "editor.wordHighlightStrongBorder": "#b5890066",
      "editor.wordHighlightBackground": "#e9a14922",
      "editor.wordHighlightBorder": "#e9a14944",
      "editor.findMatchBackground": "#0099ad21",
      "editor.findMatchBorder": "#8ce99a65",
      "editor.findMatchHighlightBackground": "#148f9f33",
      "editor.findMatchHighlightBorder": "#148f9f79",
      "editor.findRangeHighlightBackground": "#58CC6D22",
      "editor.findRangeHighlightBorder": "#58CC6D44",
      "editor.hoverHighlightBackground": "#0099ad3f",
      "editor.lineHighlightBackground": "#d1ebefcc",
      "editor.lineHighlightBorder": "#d1ebef",
      "editor.rangeHighlightBackground": "#f1e9d5a1",
      "editorLink.activeForeground": "#14a5ff",
      "editorWhitespace.foreground": "#d3cec5bb",
      "editorIndentGuide.background": "#d3cec5aa",
      "editorIndentGuide.activeBackground": "#88adc3",
      "editorBracketMatch.background": "#0099ad20",
      "editorBracketMatch.border": "#0099ad",
      "editorRuler.foreground": "#f1e6d0",
      // ---------------------------
      // Code Lens
      // ---------------------------
      "editorCodeLens.foreground": "#77aaca",
      // ---------------------------
      // Integrated Terminal Colors
      // ---------------------------
      "terminal.ansiBlack": "#000000",
      "terminal.ansiRed": "#e34e1c",
      "terminal.ansiGreen": "#00c724",
      "terminal.ansiYellow": "#e9a149",
      "terminal.ansiBlue": "#339be6",
      "terminal.ansiMagenta": "#e94981",
      "terminal.ansiCyan": "#1597a8",
      "terminal.ansiWhite": "#bbc3c4",
      "terminal.ansiBrightBlack": "#888477",
      "terminal.ansiBrightRed": "#ff4000",
      "terminal.ansiBrightGreen": "#00e62a",
      "terminal.ansiBrightYellow": "#ffbf00",
      "terminal.ansiBrightBlue": "#0095ff",
      "terminal.ansiBrightMagenta": "#ff337a",
      "terminal.ansiBrightCyan": "#00c9db",
      "terminal.ansiBrightWhite": "#cfffff",
      "terminal.background": "#f6ebd5",
      "terminal.foreground": "#005661",
      "terminalCursor.background": "#f6ebd5",
      "terminalCursor.foreground": "#005661",
      // ---------------------------
      // Merge
      // ---------------------------
      "merge.border": "#fef8ec",
      "merge.currentContentBackground": "#33e7ff33",
      "merge.currentHeaderBackground": "#33e7ff55",
      "merge.incomingContentBackground": "#9d92f233",
      "merge.incomingHeaderBackground": "#9d92f255",
      "merge.commonContentBackground": "#ffc18033",
      "merge.commonHeaderBackground": "#ffc18055",
      "editorOverviewRuler.currentContentForeground": "#33e7ff55",
      "editorOverviewRuler.incomingContentForeground": "#9d92f255",
      "editorOverviewRuler.commonContentForeground": "#ffc18055",
      "editorOverviewRuler.border": "#fef8ec",
      // ---------------------------
      // Notification Colors
      // ---------------------------
      "notificationCenter.border": "#f2edde",
      "notificationCenterHeader.foreground": "#005661",
      "notificationCenterHeader.background": "#f2edde",
      "notificationToast.border": "#f2edde",
      "notifications.foreground": "#005661",
      "notifications.background": "#f2edde",
      "notifications.border": "#f2edde",
      "notificationLink.foreground": "#005661",
      // ---------------------------
      // Diff
      // ---------------------------
      "diffEditor.insertedTextBackground": "#b2f2bb77",
      "diffEditor.insertedTextBorder": "#b2f2bba1",
      "diffEditor.removedTextBackground": "#BB1F051a",
      "diffEditor.removedTextBorder": "#BB1F0510",
      // ---------------------------
      // Debug
      // ---------------------------
      "debugToolBar.background": "#f8efdd",
      "debugExceptionWidget.background": "#f8efdd",
      "debugExceptionWidget.border": "#00899e",
      // ---------------------------
      // Extensions
      // ---------------------------
      "extensionButton.prominentBackground": "#099",
      "extensionButton.prominentForeground": "#e5f5f5",
      "extensionButton.prominentHoverBackground": "#0cc",
      focusBorder: "#f2edde",
      foreground: "#005661",
      // ---------------------------
      // Panel
      // ---------------------------
      "panel.background": "#f6ebd5",
      "panel.border": "#00c6e0",
      "panelTitle.activeBorder": "#00c6e0",
      "panelTitle.activeForeground": "#0099ad",
      "panelTitle.inactiveForeground": "#888477",
      // ---------------------------
      // Peek View Colors
      // ---------------------------
      "peekView.border": "#0099ad",
      "peekViewEditor.background": "#fff7e5",
      "peekViewEditor.matchHighlightBackground": "#148f9f33",
      "peekViewEditor.matchHighlightBorder": "#148f9f79",
      "peekViewEditorGutter.background": "#fff7e5",
      "peekViewResult.background": "#f8efdd",
      "peekViewResult.fileForeground": "#e9a149",
      "peekViewResult.lineForeground": "#87a7ab",
      "peekViewResult.matchHighlightBackground": "#f2edde",
      "peekViewResult.selectionBackground": "#f2edde",
      "peekViewResult.selectionForeground": "#6a7a7c",
      "peekViewTitle.background": "#f8efdd",
      "peekViewTitleDescription.foreground": "#87a7ab",
      "peekViewTitleLabel.foreground": "#e9a149",
      // ---------------------------
      // Progress Bar
      // ---------------------------
      "progressBar.background": "#00c6e0",
      // ---------------------------
      // Scroll Bar
      // ---------------------------
      "scrollbar.shadow": "#00000055",
      "scrollbarSlider.activeBackground": "#0099adad",
      "scrollbarSlider.background": "#6a90955b",
      "scrollbarSlider.hoverBackground": "#0099ad62",
      // ---------------------------
      // Git status colors in File Explorer
      // ---------------------------
      "gitDecoration.addedResourceForeground": "#009456",
      "gitDecoration.modifiedResourceForeground": "#14b832",
      "gitDecoration.deletedResourceForeground": "#ff4000",
      "gitDecoration.untrackedResourceForeground": "#00c6e0",
      "gitDecoration.ignoredResourceForeground": "#a8a28faa",
      "gitDecoration.conflictingResourceForeground": "#e9a149",
      // ---------------------------
      // Quick Picker
      // ---------------------------
      "pickerGroup.border": "#00c6e0",
      "pickerGroup.foreground": "#0099ad",
      // ---------------------------
      // Lists and Trees
      // ---------------------------
      "list.activeSelectionBackground": "#b6e1e7",
      "list.activeSelectionForeground": "#005661",
      "list.dropBackground": "#cdcbb2",
      "list.focusBackground": "#bee3ea",
      "list.focusForeground": "#005661",
      "list.highlightForeground": "#0099ad",
      "list.hoverBackground": "#d2f3f9",
      "list.hoverForeground": "#005661",
      "list.inactiveFocusBackground": "#c9eaed",
      "list.inactiveSelectionBackground": "#d5eef1",
      "list.inactiveSelectionForeground": "#949384",
      "list.errorForeground": "#c9481d",
      "list.warningForeground": "#e07a52",
      "listFilterWidget.background": "#d5eef1",
      "listFilterWidget.outline": "#14b832",
      "listFilterWidget.noMatchesOutline": "#ff4000",
      // ---------------------------
      // Settings Editor Colors
      // ---------------------------
      "settings.headerForeground": "#004d57",
      "settings.modifiedItemIndicator": "#00bd23",
      "settings.dropdownListBorder": "#ade2eb88",
      "settings.dropdownBackground": "#f2edde",
      "settings.dropdownForeground": "#0bb",
      "settings.dropdownBorder": "#f2edde",
      "settings.checkboxBackground": "#f2edde",
      "settings.checkboxForeground": "#0bb",
      "settings.checkboxBorder": "#f2edde",
      "settings.textInputBackground": "#f2edde",
      "settings.textInputForeground": "#0bb",
      "settings.textInputBorder": "#f2edde",
      "settings.numberInputBackground": "#f0e7d1",
      "settings.numberInputForeground": "#5842ff",
      "settings.numberInputBorder": "#f0e7d1",
      // ---------------------------
      // Breadcrumbs
      // ---------------------------
      "breadcrumb.foreground": "#888477",
      "breadcrumb.background": "#fef8ec",
      "breadcrumb.focusForeground": "#0099ad",
      "breadcrumb.activeSelectionForeground": "#005661",
      "breadcrumbPicker.background": "#f2edde",
      // ---------------------------
      // Title bar
      // Note: These colors are currently only supported on macOS.
      // ---------------------------
      "titleBar.activeBackground": "#f8efdd",
      "titleBar.activeForeground": "#005661",
      "titleBar.inactiveBackground": "#f8efdd",
      "titleBar.inactiveForeground": "#888477",
      // ---------------------------
      // Custom title bar and menus
      // Note: These colors are currently only supported on Windows and Linux.
      // ---------------------------
      "menu.background": "#f2edde",
      "menu.foreground": "#888477",
      "menu.selectionBackground": "#d2f3f9",
      "menu.selectionForeground": "#0099ad",
      "menu.selectionBorder": "#d2f3f9",
      "menubar.selectionBackground": "#d2f3f9",
      "menubar.selectionForeground": "#0099ad",
      "menubar.selectionBorder": "#d2f3f9",
      // ---------------------------
      // Snippets
      // ---------------------------
      "editor.snippetTabstopHighlightBackground": "#fdefd3",
      "editor.snippetTabstopHighlightBorder": "#fdf3dd",
      "editor.snippetFinalTabstopHighlightBackground": "#fdefd3",
      "editor.snippetFinalTabstopHighlightBorder": "#fdf3dd"
   },
   tokenColors: syntax
});
