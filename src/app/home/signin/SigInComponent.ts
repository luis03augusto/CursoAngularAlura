import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
    templateUrl: './signin.compontent.html',
})
export class SigInComponent implements OnInit {
    loginForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
    }
}
