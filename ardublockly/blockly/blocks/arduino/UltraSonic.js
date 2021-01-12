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

Blockly.Blocks['ultra_sonic'] = {
  init: function() {
    this.appendDummyInput();
    this.appendDummyInput()
        .appendField("초음파 센서 ")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("  Trig# ")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), 'Trig');
    this.appendDummyInput()
        .appendField("  Echo#")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), 'Echo');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("초음파 센서 블럭입니다.");
    this.setHelpUrl("");
    },
    /**
     * Updates the content of the the pin related fields.
     * @this Blockly.Block
     */
    updateFields: function() {
      Blockly.Arduino.Boards.refreshBlockFieldDropdown(
          this, 'Trig', 'digitalPins');
      Blockly.Arduino.Boards.refreshBlockFieldDropdown(
          this, 'Echo', 'digitalPins');
    }
};
