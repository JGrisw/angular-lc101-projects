import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if(result) {
      this.color = 'blue';
      this.height = 10000;
      this.width =0;
      this.message = 'Shuttle in flight.';
    }
  }

  handleLand(rocketImage) {
    let result = window.confirm('Are you sure you would like to land?');
    if(result) {
      this.color = 'green';
      this.height =0;
      this.width = 0;
      this.message = 'Shuttle has landed';
    }
  }

  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure you would like to abort da mission?');
    if(result) {
      this.color = 'red'
      this.height =0;
      this.width=0;
      this.message= 'Mission Aborted';
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction = "right"){
      let movement = parseInt(rocketImage.style.left) +10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }
    if (direction = "left"){
      let movement = parseInt(rocketImage.style.right) +10 + 'px';
      rocketImage.style.right = movement;
      this.width = this.width + 10000;
    }

    if (direction = "up"){
      let movement = parseInt(rocketImage.style.bottom) +10 + 'px';
      rocketImage.style.bottom = movement;
      this.width = this.width + 10000;
    }

    if (direction = "down"){
      let movement = parseInt(rocketImage.style.top) +10 + 'px';
      rocketImage.style.top = movement;
      this.width = this.width + 10000;
    }
  }



}

