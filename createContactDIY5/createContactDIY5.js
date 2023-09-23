import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact'

import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName'
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import BIRTHDATE_FIELD from '@salesforce/schema/Contact.Birthdate'
import DEPARTMENT_FIELD from '@salesforce/schema/Contact.Department'

import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class CreateContact extends LightningElement {
    
    fieldName={
        fname:FIRSTNAME_FIELD,
        lname:LASTNAME_FIELD,
        email:EMAIL_FIELD,
        dob:BIRTHDATE_FIELD,
        dept:DEPARTMENT_FIELD

    };

    handleSuccess(event) {
        this.showSuccessToast();
    }

    handleError(event) {
        this.showErrorToast(event.detail.message);
    }

    showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'Contact created successfully',
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }

    showErrorToast(errorMessage) {
        const evt = new ShowToastEvent({
            title: 'Error',
            message: 'Error creating contact: ' + errorMessage,
            variant: 'error',
        });
        this.dispatchEvent(evt);
    }
}
