var Ardublockly = Ardublockly || {};
Ardublockly.LOCALISED_TEXT = {
  translationLanguage: "한국어",
  title: "아두블록클리",
  blocks: "Blocks",
  /* Menu */
  open: "Open",
  save: "Save",
  deleteAll: "Delete All",
  settings: "Settings",
  documentation: "Documentation",
  reportBug: "Report Bug",
  examples: "Examples",
  /* Settings */
  compilerLocation: "Compiler Location",
  compilerLocationDefault: "Compiler Location unknown",
  sketchFolder: "Sketch Folder",
  sketchFolderDefault: "Sketch Folder unknown",
  arduinoBoard: "Arduino Board",
  arduinoBoardDefault: "Arduino Board unknown",
  comPort: "COM Port",
  comPortDefault: "COM Port unknown",
  defaultIdeButton: "Default IDE Button",
  defaultIdeButtonDefault: "IDE options unknown",
  language: "Language",
  languageDefault: "Language unknown",
  sketchName: "Sketch Name",
  /* Arduino console output */
  arduinoOpMainTitle: "Arduino IDE output",
  arduinoOpWaiting: "Waiting for the IDE output...",
  arduinoOpUploadedTitle: "Successfully Uploaded Sketch",
  arduinoOpVerifiedTitle: "Successfully Verified Sketch",
  arduinoOpOpenedTitle: "Sketch opened in IDE",
  arduinoOpOpenedBody: "The sketch should be loaded in the Arduino IDE.",
  arduinoOpErrorUpVerTitle: "Build or Upload failed",
  arduinoOpErrorSketchTitle: "Sketch not found",
  arduinoOpErrorFlagTitle: "Invalid command line argument",
  arduinoOpErrorFlagPrefTitle: "Preference passed to 'get-pref' flag does not exist",
  arduinoOpErrorIdeDirTitle: "Unable to find Arduino IDE",
  arduinoOpErrorIdeDirBody: "The compiler directory has not been set.<br>" +
                            "Please set it in the Settings.",
  arduinoOpErrorIdeOptionTitle: "What should we do with the Sketch?",
  arduinoOpErrorIdeOptionBody: "The launch IDE option has not been set.<br>" +
                               "Please select an IDE option in the Settings.",
  arduinoOpErrorIdePortTitle: "Serial Port unavailable",
  arduinoOpErrorIdePortBody: "The Serial Port is not accessible.<br>" +
                             "Please check if the Arduino is correctly connected to the PC and select the Serial Port in the Settings.",
  arduinoOpErrorIdeBoardTitle: "Unknown Arduino Board",
  arduinoOpErrorIdeBoardBody: "The Arduino Board has not been set.<br>" +
                              "Please select the appropriate Arduino Board from the settings.",
  /* Modals */
  noServerTitle: "Ardublockly app not running",
  noServerTitleBody: "<p>For all the Ardublockly features to be enabled, the Ardublockly desktop application must be running locally on your computer.</p>" +
                     "<p>If you are using an online version you will not be able to configure the settings nor load the blocks code into an Arduino.</p>" +
                     "<p>Installation instruction can be found in the <a href=\"https://github.com/carlosperate/ardublockly\">Ardublockly repository</a>.</p>" +
                     "<p>If you have Ardublockly already installed, make sure the application is running correctly.</p>",
  noServerNoLangBody: "If the Ardublockly application is not running the language cannot be fully changed.",
  addBlocksTitle: "Additional Blocks",
  /* Alerts */
  loadNewBlocksTitle: "Load new blocks?",
  loadNewBlocksBody: "Loading a new XML file will replace the current blocks from the workspace.<br>" +
                     "Are you sure you want to proceed?",
  discardBlocksTitle: "Delete blocks?",
  discardBlocksBody: "There are %1 blocks on the workspace.<br>" +
                     "Are you sure you want to delete them?",
  invalidXmlTitle: "Invalid XML",
  invalidXmlBody: "The XML file was not successfully parsed into blocks. Please review the XML code and try again.",
  /* Tooltips */
  uploadingSketch: "Uploading Sketch into Arduino...",
  uploadSketch: "Upload Sketch to the Arduino",
  verifyingSketch: "Verifying Sketch...",
  verifySketch: "Verify the Sketch",
  openingSketch: "Opening Sketch in the Arduino IDE...",
  openSketch: "Open Sketch in IDE",
  notImplemented: "Function not yet implemented",
  /* Prompts */
  ok: "OK",
  okay: "Okay",
  cancel: "Cancel",
  return: "Return",
  /* Cards */
  arduinoSourceCode: "Arduino Source Code",
  blocksXml: "Blocks XML",
  /* Toolbox Categories*/
  catLogic: "논리",
  catLoops: "반복",
  catMath: "수학",
  catText: "문자열",
  catVariables: "변수",
  catFunctions: "함수",
  catInputOutput: "입력/출력",
  catTime: "시간",
  catAudio: "오디오",
  catMotors: "서보모터",
  catComms: "통신",
  catSmartCity:"스마트시티",
  catLED: "3색LED",
  catUltra_sonic: "초음파센서",
  catillu: "조도센서",
  catdht: "온습도 센서",
  catlcd: "LCD",
  cat7segment: "7 세그먼트"
};
