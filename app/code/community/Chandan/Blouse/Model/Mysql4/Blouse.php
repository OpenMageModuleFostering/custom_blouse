<?php

class Chandan_Blouse_Model_Mysql4_Blouse extends Mage_Core_Model_Mysql4_Abstract
{
    public function _construct()
    {    
        // Note that the blouse_id refers to the key field in your database table.
        $this->_init('blouse/blouse', 'blouse_id');
    }
}