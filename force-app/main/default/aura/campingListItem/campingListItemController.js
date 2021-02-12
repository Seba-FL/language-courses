({
    packItem:function(component, event, helper) {
        let item = component.get("v.item");
        let updateItem = component.getEvent("updateItem");
        updateItem.setParams({ "item": item });
        updateItem.fire();
    }
})