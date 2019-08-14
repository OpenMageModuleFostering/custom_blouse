<?php
class Chandan_Blouse_IndexController extends Mage_Core_Controller_Front_Action
{
    public function indexAction()
    {			
		$this->loadLayout();     
		$this->renderLayout();
    }
	
	public function getOptions(){
		return array(
			array('title' => 'Blouse Above Waist','type' => 'field','is_require' => 0,),
			array('title' => 'Blouse Around Arm','type' => 'field','is_require' => 0,),
			array('title' => 'Blouse Around Bust','type' => 'field','is_require' => 0,),
			array('title' => 'Blouse Bicep','type' => 'field','is_require' => 0,),
			array('title' => 'Blouse Cross Back','type' => 'field','is_require' => 0,),
			array('title' => 'Blouse Cross Front','type' => 'field','is_require' => 0,),
			array('title' => 'Blouse Height','type' => 'field','is_require' => 0,),
			array('title' => 'Blouse Length Hps','type' => 'field','is_require' => 0,),
			array('title' => 'Blouse Measurement Size','type' => 'field','is_require' => 0,),
			array('title' => 'Blouse Measurement Unit','type' => 'field','is_require' => 0,),
			array('title' => 'Blouse Name','type' => 'field','is_require' => 0,),
			array('title' => 'Blouse Neck Depth Back','type' => 'field','is_require' => 0,),
			array('title' => 'Blouse Neck Depth Front','type' => 'field','is_require' => 0,),
			array('title' => 'Blouse Shoulder','type' => 'field','is_require' => 0,),
			array('title' => 'Blouse Shoulder Height','type' => 'field','is_require' => 0,),
			array('title' => 'Blouse Sleeve Length','type' => 'field','is_require' => 0,),
			array('title' => 'Blouse Style','type' => 'field','is_require' => 0,),
			array('title' => 'Blouse Waist','type' => 'field','is_require' => 0,),															
			array('title' => 'Special Instruction','type' => 'field','is_require' => 0,)
		);
	}
	
	public function createproduct($input_style_id,$imagepath)
	{		
		$product_name = $input_style_id; //product name
		$model = Mage::getModel('catalog/product'); //getting product model
		$collection = $model->getCollection(); //products collection
		foreach ($collection as $product) //loop for getting products
		{                  		
			$model->load($product->getId());
			$pname = $model->getName();
			if(strcmp($pname,$product_name)==0)
			{
				$id = $product->getId();				
			}						
		}			
		if(!empty($id)){
			return $id;
		} else {
			$product = Mage::getModel('catalog/product');
			$product->setSku('blouse'.rand());
			$product->setName($input_style_id);
			$product->setDescription($input_style_id.' Blouse section');
			$product->setShortDescription($input_style_id.' Blouse section');			
			$product->setPrice(Mage::getStoreConfig('chandan/chandan_group/chandan_input',Mage::app()->getStore()));									
			$product->setTypeId('simple');
			$product->setAttributeSetId(4); // enter the catalog attribute set id here		
			$product->setTaxClassId(0);
			$product->setVisibility(1);			
			$product->setStatus(1);
			$product->setProductOptions($this->getOptions());
			$product->setCanSaveCustomOptions(true);			
			$product->setStockData(
			array(
			'manage_stock' => 1,
			'is_in_stock' => 1,
			'qty' => 10
			)
			);
			$product->setWebsiteIds(array(Mage::app()->getStore(true)->getWebsite()->getId()));
			try{
				$product->save();
				return $product_id=$product->getId();
			}	
			catch (Exception $ex) {
				return $ex->getMessage();	
			}
		}
	}	
	
	public function setblousedataAction()
    {		
		$input_style_id = $_REQUEST['input_style_id'];
		$input_around_bust_id = $_REQUEST['input_around_bust_id'];
		$input_above_waist_id = $_REQUEST['input_above_waist_id'];
		$input_shoulder_id = $_REQUEST['input_shoulder_id'];
		$input_around_arm_id = $_REQUEST['input_around_arm_id'];
		$input_height_id = $_REQUEST['input_height_id'];
		$input_shoulder_height_id = $_REQUEST['input_shoulder_height_id'];
		$input_cross_front_id = $_REQUEST['input_cross_front_id'];
		$input_cross_back_id = $_REQUEST['input_cross_back_id'];
		$input_neck_depth_back_id = $_REQUEST['input_neck_depth_back_id'];
		$input_neck_depth_front_id = $_REQUEST['input_neck_depth_front_id'];
		$input_measurement_size_id = $_REQUEST['input_measurement_size_id'];
		$input_blouse_measurement_unit_id = $_REQUEST['input_blouse_measurement_unit_id'];
		$input_length_hps_id = $_REQUEST['input_length_hps_id'];
		$input_sleeve_length_id = $_REQUEST['input_sleeve_length_id'];
		$input_waist_id = $_REQUEST['input_waist_id'];
		$input_bicep_id = $_REQUEST['input_bicep_id'];
		$customer_blouse_name = $_REQUEST['customer_blouse_name'];
		$input_special_instruction = $_REQUEST['input_special_instruction'];
		
		$images1 = $_REQUEST['images_name'];		
		
		$url = Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_MEDIA);
		$images = str_replace($url, '', $images1);
		$cart = array (
			'image_url' => $images1,
			'input_style_id' => $input_style_id
			
		);	
		
		$pid = $this->createproduct($input_style_id,$imagepath);		
		$product = Mage::getModel('catalog/product')->load($pid);	
	
		foreach ($product->getOptions() as $value) {				
			if($value->getTitle() == "Blouse Above Waist"){ $data[$value->getOption_id()] = $input_above_waist_id; }
			if($value->getTitle() == "Blouse Around Arm"){ $data[$value->getOption_id()] = $input_around_arm_id; }
			if($value->getTitle() == "Blouse Around Bust"){ $data[$value->getOption_id()] = $input_around_bust_id; }
			if($value->getTitle() == "Blouse Bicep"){ $data[$value->getOption_id()] = $input_bicep_id; }
			if($value->getTitle() == "Blouse Cross Back"){ $data[$value->getOption_id()] = $input_cross_back_id; }
			if($value->getTitle() == "Blouse Cross Front"){ $data[$value->getOption_id()] = $input_cross_front_id; }
			if($value->getTitle() == "Blouse Height"){ $data[$value->getOption_id()] = $input_height_id; }
			if($value->getTitle() == "Blouse Length Hps"){ $data[$value->getOption_id()] = $input_length_hps_id; }
			if($value->getTitle() == "Blouse Measurement Size"){ $data[$value->getOption_id()] = $input_measurement_size_id; }
			if($value->getTitle() == "Blouse Measurement Unit"){ $data[$value->getOption_id()] = $input_blouse_measurement_unit_id; }
			if($value->getTitle() == "Blouse Name"){ $data[$value->getOption_id()] = $customer_blouse_name; }
			if($value->getTitle() == "Blouse Neck Depth Back"){ $data[$value->getOption_id()] = $input_neck_depth_back_id; }
			if($value->getTitle() == "Blouse Neck Depth Front"){ $data[$value->getOption_id()] = $input_neck_depth_front_id; }
			if($value->getTitle() == "Blouse Shoulder"){ $data[$value->getOption_id()] = $input_shoulder_id; }
			if($value->getTitle() == "Blouse Shoulder Height"){ $data[$value->getOption_id()] = $input_shoulder_height_id; }
			if($value->getTitle() == "Blouse Sleeve Length"){ $data[$value->getOption_id()] = $input_sleeve_length_id; }
			if($value->getTitle() == "Blouse Style"){ $data[$value->getOption_id()] = $input_style_id; }
			if($value->getTitle() == "Blouse Waist"){ $data[$value->getOption_id()] = $input_waist_id; }
			if($value->getTitle() == "Special Instruction"){ $data[$value->getOption_id()] = $input_special_instruction; }
		}
																		
		$cart = Mage::getModel('checkout/cart');
		$cart->init();
			$params = array(
			'product' => $pid,
			'qty'     => 1,
			'options' => $data
		); 	
										
		try {	
			$productimg = Mage::getModel('catalog/product')->load($pid);	
			$imagepath='media/'.$images;
			$productimg->addImageToMediaGallery($imagepath, array ('image','small_image','thumbnail'), false, true);				
			$productimg->save();
			
			$cart->addProduct($product, new Varien_Object($params));
			Mage::getSingleton('checkout/session')->setCartWasUpdated(true);
			$cart->save();
		}
		catch (Exception $ex) {
			echo $ex->getMessage();
		}		
	}	
}