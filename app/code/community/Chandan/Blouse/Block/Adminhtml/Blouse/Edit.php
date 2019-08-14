<?php

class Chandan_Blouse_Block_Adminhtml_Blouse_Edit extends Mage_Adminhtml_Block_Widget_Form_Container
{
    public function __construct()
    {
        parent::__construct();
                 
        $this->_objectId = 'id';
        $this->_blockGroup = 'blouse';
        $this->_controller = 'adminhtml_blouse';
        
        $this->_updateButton('save', 'label', Mage::helper('blouse')->__('Save Style'));
        $this->_updateButton('delete', 'label', Mage::helper('blouse')->__('Delete Style'));
		
        $this->_addButton('saveandcontinue', array(
            'label'     => Mage::helper('adminhtml')->__('Save And Continue Edit'),
            'onclick'   => 'saveAndContinueEdit()',
            'class'     => 'save',
        ), -100);

        $this->_formScripts[] = "
            function toggleEditor() {
                if (tinyMCE.getInstanceById('blouse_content') == null) {
                    tinyMCE.execCommand('mceAddControl', false, 'blouse_content');
                } else {
                    tinyMCE.execCommand('mceRemoveControl', false, 'blouse_content');
                }
            }

            function saveAndContinueEdit(){
                editForm.submit($('edit_form').action+'back/edit/');
            }
        ";
    }

    public function getHeaderText()
    {
        if( Mage::registry('blouse_data') && Mage::registry('blouse_data')->getId() ) {
            return Mage::helper('blouse')->__("Edit Style '%s'", $this->htmlEscape(Mage::registry('blouse_data')->getTitle()));
        } else {
            return Mage::helper('blouse')->__('Add Style');
        }
    }
}