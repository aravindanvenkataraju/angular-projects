import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data, Params } from "@angular/router";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // const id: number = this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(parseInt(params["id"]));
    // });

    //user resolver service:
    this.route.data.subscribe((data: Data) => {
      this.server = data["server"];
    });
  }
}
