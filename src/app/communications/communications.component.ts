import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  	selector: 'app-communications',
  	templateUrl: './communications.component.html',
  	styleUrls: ['./communications.component.css']
})

export class CommunicationsComponent implements OnInit {
	myFirstReactiveForm: FormGroup;
  
	constructor(private fb: FormBuilder){}
 	ngOnInit(){
		this.initForm();
	}

	/** Инициализация формы*/
	initForm(){
		this.myFirstReactiveForm = this.fb.group({
			name: ['', [
			  	Validators.required,
			  	Validators.pattern(/[А-я]/)
				]
			],
			phone: ['8', [
			  	Validators.required, Validators.email
				]
			]
		});
	}

	isControlInvalid(controlName: string): boolean {
		const control = this.myFirstReactiveForm.controls[controlName];
		
		const result = control.invalid && control.touched;
		
		return result;
	}

	onSubmit() {
		const controls = this.myFirstReactiveForm.controls;
		
		 /** Проверяем форму на валидность */ 
		if (this.myFirstReactiveForm.invalid) {
			/** Если форма не валидна, то помечаем все контролы как touched*/
			Object.keys(controls)
		   	.forEach(controlName => controls[controlName].markAsTouched());
		   
		   /** Прерываем выполнение метода*/
		   return;
		}
		
		/** TODO: Обработка данных формы */
		console.log(this.myFirstReactiveForm.value);
	}
}
