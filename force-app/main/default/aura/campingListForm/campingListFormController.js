({
    clickCreateItem: function(component, event, helper) {
        let validItem = component.find('itemform').reduce(function (validSoFar, inputCmp) {
            // Mensajes de error para los campos del formulario
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
            
        }, true);
        // Si no hay errores continuamos
        if(validItem){
            // Crea nuevo Item
           	
            let newItem = component.get("v.newItem");
            console.log("Create Item: " + JSON.stringify(newItem));

            helper.createItem(component, newItem);

            component.set("v.newItem", 
                          { 'sobjectType': 'Camping_Item__c',
                            'Name': '',
                            'Packed__c': false,
                            'Price__c': 0,
                            'Quantity__c': 0 });

        }

    },
        handleUpdateItem: function(component, event, helper) {
            let updatedItem = event.getParam("item");
            helper.updateItem(component, updatedItem);
            
    }




})