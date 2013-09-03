// new JS

	var form = {
	  "id": "01",
	  "title": "Sample Form #1",
	  "formSlug": "sampleform1",
	  "fields": [
	  	{
	  		"fieldLabel": "Small text",
	  		"fieldSlug": "smalltextdemo",
	  		"fieldType": "text_sm",
	  		"fieldVal": "Hello small text"
	  	},
		{
	  		"fieldLabel": "Large text",
	  		"fieldSlug": "largetextdemo",
	  		"fieldType": "text_lg",
	  		"fieldVal": "Hello large text"	
	  	},
		{
	  		"fieldLabel": "Textarea",
	  		"fieldSlug": "textareademo",
	  		"fieldType": "textarea",
	  		"fieldVal": "Hello textarea"
	  	},
		{
	  		"fieldLabel": "Select input",
	  		"fieldSlug": "selectdemo",
	  		"fieldType": "select", 		
	  		"fieldOptions": [
	  			{
	  				"optionVal": "option1",
	  				"optionText": "Option #1"
	  			},
	  			{
	  				"optionVal": "option2",
	  				"optionText": "Option #2"
	  			},
	  			{
	  				"optionVal": "option3",
	  				"optionText": "Option #3"
	  			}
	  		]  		
	  	},	  	  		  	
		{
	  		"fieldLabel": "Radio input",
	  		"fieldSlug": "radiodemo",
	  		"fieldType": "radio",	  		
	  		"fieldOptions": [
	  			{
	  				"optionVal": "radio1",
	  				"optionText": "Radio #1",
	  				"optionChecked": false
	  			},
	  			{
	  				"optionVal": "radio2",
	  				"optionText": "Radio #2",
	  				"optionChecked": true
	  			},
	  			{
	  				"optionVal": "radio3",
	  				"optionText": "Radio #3",
	  				"optionChecked": false
	  			}
	  		]  		
	  	},
		{
	  		"fieldLabel": "Checkbox input",
	  		"fieldSlug": "checkboxdemo",
	  		"fieldType": "checkbox",  		
	  		"fieldOptions": [
	  			{
	  				"optionVal": "checkbox1",
	  				"optionText": "Checkbox #1",
	  				"optionChecked": false
	  			},
	  			{
	  				"optionVal": "checkbox2",
	  				"optionText": "Checkbox #2",
	  				"optionChecked": true
	  			},
	  			{
	  				"optionVal": "checkbox3",
	  				"optionText": "Checkbox #3",
	  				"optionChecked": true
	  			}
	  		]  		
	  	},
	  	{
	  		"fieldLabel": "Salutation",
	  		"fieldSlug": "salutationdemo",
	  		"fieldType": "salutation"
	  	},
	  	{
	  		"fieldLabel": "Country",
	  		"fieldSlug": "countrydemo",
	  		"fieldType": "country"
	  	},
	  	{
	  		"fieldLabel": "State",
	  		"fieldSlug": "statedemo",
	  		"fieldType": "state"
	  	},
	  	{
	  		"fieldLabel": "File Upload",
	  		"fieldSlug": "filedemo",
	  		"fieldType": "file"
	  	},	  	
	  	{
	  		"fieldLabel": "Compound Field Example",
	  		"fieldSlug": "compounddemo",
	  		"fieldType": "compound",
	  		"fieldChildren": [
				{
			  		"fieldLabel": "Salutation",
			  		"fieldSlug": "salutationdemo",
			  		"fieldType": "salutation",
			  		"fieldDetail": "Title"
			  	},
			  	{
			  		"fieldLabel": "First Name",
			  		"fieldSlug": "smalltextdemo",
			  		"fieldType": "text_sm",
			  		"fieldVal": "First Name",
			  		"fieldDetail": "First Name"			  		
			  	},
				{
			  		"fieldLabel": "Last Name",
			  		"fieldSlug": "largetextdemo",
			  		"fieldType": "text_lg",
			  		"fieldVal": "Last Name",
			  		"fieldDetail": "Last Name"			  				  			
	  			}			  				  	
	  		]
	  	}	 	  	
	  ]
	};
	
//KO

	var viewModel = {
		form: form	    
	    /*passwordValue : ko.observable("mypass"),
	    booleanValue : ko.observable(true),
	    optionValues : ["Alpha", "Beta", "Gamma"],
	    selectedOptionValue : ko.observable("Gamma"),
	    multipleSelectedOptionValues : ko.observable(["Alpha"]),
	    radioSelectedOptionValue : ko.observable("Beta")*/
	};
	ko.applyBindings(viewModel);

