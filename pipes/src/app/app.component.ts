import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("stable");
    }, 2000);
  });
  filterStatus: string;
  servers = [
    {
      instanceType: "medium",
      name: "Production Server",
      status: "stable",
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: "large",
      name: "User Database",
      status: "stable",
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: "small",
      name: "Development Server",
      status: "offline",
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: "small",
      name: "Testing Environment Server",
      status: "stable",
      started: new Date(15, 1, 2017),
    },
  ];
  getStatusClasses(server: {
    instanceType: string;
    name: string;
    status: string;
    started: Date;
  }) {
    return {
      "list-group-item-success": server.status === "stable",
      "list-group-item-warning": server.status === "offline",
      "list-group-item-danger": server.status === "critical",
    };
  }
  private getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  createServer() {
    let newServer = {
      instanceType: "",
      name: "",
      status: "",
      started: null,
    };
    switch (this.getRandomInt(3)) {
      case 0:
        newServer["instanceType"] = "small";
        break;
      case 1:
        newServer["instanceType"] = "medium";
        break;
      case 2:
        newServer["instanceType"] = "large";
        break;
      default:
        newServer["instanceType"] = "small";
        break;
    }

    if (this.getRandomInt(2) == 0) {
      newServer["status"] = "offline";
    } else {
      newServer["status"] = "stable";
    }

    newServer["name"] =
      "Server ID:" + (Math.random() + 1).toString(36).substring(7);
    newServer["started"] = Date.now();
    this.servers.push(newServer);
  }
}
