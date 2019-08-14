<?php
class Chandan_Blouse_Block_Blouse extends Mage_Core_Block_Template
{
	public function _prepareLayout()
    {
		return parent::_prepareLayout();
    }
    
     public function getBlouse()     
     { 
        if (!$this->hasData('blouse')) {
            $this->setData('blouse', Mage::registry('blouse'));
        }
        return $this->getData('blouse');
        
    }
}