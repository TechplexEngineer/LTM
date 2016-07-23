


Blockly.Blocks['event_block_break'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When \"player\" breaks \"block\"");
    this.appendStatementInput("EVENTHANDLER")
        .setCheck(null)
        .appendField("do");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('Run this code when a player breaks a block.');
    this.setHelpUrl('https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockBreakEvent.html');
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   */
  getVars: function() {
    var vars = ['player', 'block'];
    for (var i = 0, input; input = this.inputList[i]; i++) {
      for (var j = 0, field; field = input.fieldRow[j]; j++) {
        if (field instanceof Blockly.FieldVariable) {
          vars.push(field.getValue());
        }
      }
    }
    return vars;
  }
};

Blockly.JavaScript['event_block_break'] = function(block) {
  var statements_eventhandler = Blockly.JavaScript.statementToCode(block, 'EVENTHANDLER');

  //@todo We have to do something special if this block is connected
  var code = 'events.blockBreak(function(event, cancel) {\n';
  code += '\tvar player = event.getPlayer();\n';
  code += '\tvar block = event.getBlock();\n';
  code += '\t'+statements_eventhandler
  code += '})';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// playerInteract