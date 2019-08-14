<?php

class Chandan_Blouse_Model_Mysql4_Blouse_Collection extends Mage_Core_Model_Mysql4_Collection_Abstract
{
    public function _construct()
    {
        parent::_construct();
        $this->_init('blouse/blouse');
    }
}