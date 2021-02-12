trigger LanguageCourseTrigger on Language_Course__c (after insert, after update, after delete) {
    if (Trigger.isInsert) {
        
        EmailManager.sendMail('toloxseba@gmail.com', 'Lenguaje creado', 'Mensaje enviado con exito');
    }
}