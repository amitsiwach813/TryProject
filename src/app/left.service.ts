import { Injectable } from '@angular/core';

@Injectable()
export class LeftService {
role1={
		image:"assets/userIcon.png",
		tex:"Add User",
		text1:"Learn to add users",
		button1:"PLAY VIDEO"
	};
	role2={
		image:"assets/devices.png",
		tex:"Add Devices",
		text1:"A brief video on adding devices",
		button1:"PLAY VIDEO"
	};
	role3={
		image:"assets/roles.png",
		tex:"Roles and roles assignments",
		text1:"Using roles and creating roles assignments in roles",
		button1:"PLAY VIDEO"
	};
  constructor() { }

}
