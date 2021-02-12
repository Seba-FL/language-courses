({
    createItem: function(component, newItem) {
        let createEvent = component.getEvent("addItem");
        createEvent.setParams({ "item": newItem });
        createEvent.fire();
    },
})