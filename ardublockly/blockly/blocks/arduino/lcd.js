/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino Digital and Analogue input and output
 *     functions. The Arduino function syntax can be found at
 *     http://arduino.cc/en/Reference/HomePage
 *
 * TODO: maybe change this to a "PIN" BlocklyType
 */
'use strict';

goog.provide('Blockly.Blocks.io');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.io.HUE = 250;

Blockly.Blocks['lcd'] = {
  init: function() {
    this.appendDummyInput();
    this.appendDummyInput()
        .appendField("LCD")
        .appendField(new Blockly.FieldDropdown([["0x27","0x27"], ["0x3F","0x3F"]]), "menu")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("  좌표설정")
        .appendField("x값: ")
        .appendField(new Blockly.FieldNumber(0, 0, 15), "x")
        .appendField(" y값: ")
        .appendField(new Blockly.FieldNumber(0, 0, 1), "y");
    this.appendDummyInput()
        .appendField("  화면출력")
        .appendField(new Blockly.FieldTextInput("변수"), "content");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("12C LCD 센서입니다.");
 this.setHelpUrl("");
}
};

Blockly.Blocks['lcd_text'] = {
  init: function() {
    this.appendDummyInput();
    this.appendDummyInput()
        .appendField("LCD")
        .appendField(new Blockly.FieldDropdown([["0x27","0x27"], ["0x3F","0x3F"]]), "menu")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("  좌표설정")
        .appendField("x값: ")
        .appendField(new Blockly.FieldNumber(0, 0, 15), "x")
        .appendField(" y값: ")
        .appendField(new Blockly.FieldNumber(0, 0, 1), "y");
    this.appendDummyInput()
        .appendField("  화면출력")
        .appendField(new Blockly.FieldTextInput("문자열"), "content2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("화면 내용 지우기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("lcd.clear() 함수 블럭입니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_backlight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("백라이트 켜기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("lcd.backlight() 함수 블럭입니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_noBacklight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("백라이트 끄기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("lcd.noBacklight() 함수 블럭입니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_scrollDisplayRight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("우측으로 1칸 스크롤");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("lcd.scrollDisplayRight() 함수 블럭입니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_scrollDisplayLeft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("좌측으로 1칸 스크롤");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("lcd.scrollDisplayLeft() 함수 블럭입니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_autoscroll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("우에서 좌로 스크롤");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("lcd.autoscroll() 함수 블럭입니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lcd_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("아스키코드 값 출력")
        .appendField(new Blockly.FieldTextInput(""), "content");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("lcd.write() 함수 블럭입니다.");
 this.setHelpUrl("");
  }
};
