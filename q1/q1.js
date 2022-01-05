function timeToEat(timeString) {
  try {
    let splittedTimeString = timeString.split(" ");
    if (splittedTimeString.length != 2) {
      throw "input is invalid";
    }
    let time = splittedTimeString[0].split(":");
    if (time.length != 2) {
      throw "input is invalid";
    }

    if (+time[0] < 0 || +time[0] >= 24 || +time[1] < 0 || +time[1] >= 60) {
      throw "input is invalid";
    }

    let date = new Date();
    let breakfast = new Date();
    let lunch = new Date();
    let dinner = new Date();
    breakfast.setHours(7, 0);
    lunch.setHours(12, 0);
    dinner.setHours(19, 0);

    if (splittedTimeString[1] == "a.m.") {
      date.setHours(+time[0], +time[1]);
    } else if (splittedTimeString[1] == "p.m.") {
      date.setHours(+time[0] + 12, +time[1]);
    } else {
      throw "input is invalid";
    }

    let hours = date.getHours();

    if (hours < 7) {
      const remainHours = parseInt(
        Math.abs(breakfast.getTime() - date.getTime()) / (1000 * 60 * 60)
      );
      const remainMinutes = parseInt(
        (Math.abs(breakfast.getTime() - date.getTime()) / (1000 * 60)) % 60
      );

      return [remainHours, remainMinutes];
    } else if (hours < 12) {
      const remainHours = parseInt(
        Math.abs(lunch.getTime() - date.getTime()) / (1000 * 60 * 60)
      );
      const remainMinutes = parseInt(
        (Math.abs(lunch.getTime() - date.getTime()) / (1000 * 60)) % 60
      );

      return [remainHours, remainMinutes];
    } else {
      const remainHours = parseInt(
        Math.abs(dinner.getTime() - date.getTime()) / (1000 * 60 * 60)
      );
      const remainMinutes = parseInt(
        (Math.abs(dinner.getTime() - date.getTime()) / (1000 * 60)) % 60
      );

      return [remainHours, remainMinutes];
    }
  } catch (err) {
    console.error(err);
  }
}

console.log(timeToEat("2:00 p.m."));
console.log(timeToEat("5:50 a.m."));
console.log(timeToEat("5:50 a."));
console.log(timeToEat("5:50 "));
console.log(timeToEat("5 a.m"));
console.log(timeToEat("25:50 a.m."));
console.log(timeToEat("6:65 a.m."));
