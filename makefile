

setupdev:
	@-rm -r resources
	mkdir resources
	ln -s ../../te_blockly/blockly_compressed.js ./resources
	ln -s ../../te_blockly/javascript_compressed.js ./resources
	ln -s ../../te_blockly/blocks_compressed.js ./resources
	ln -s ../../te_blockly/media ./resources/media
	ln -s ../../te_blockly/msg ./resources/msg
	ln -s ../../te_blockly/demos/prettify.js ./resources
	ln -s ../../te_blockly/demos/prettify.css ./resources