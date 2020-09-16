import { AbstractControl, ValidationErrors } from '@angular/forms';

export class NameValidators{

    static forenameValidation(control:AbstractControl):ValidationErrors|null{
        if((control.value as string).search("[0-9]+")!=-1){
            return {
                forenameValidation:true
            };
        }
        return null;
    }

    static surnameValidation(control:AbstractControl):ValidationErrors|null{

        if((control.value as string).search("[0-9]+")!=-1){
            return {
                surnameValidation:true
            };
        }
        return null;
    }
}