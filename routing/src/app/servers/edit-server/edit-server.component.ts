import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable } from "rxjs";

import { ServersService } from "../servers.service";
import { CanComponentDeactivate } from "./can-deactivate-guard.service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit: boolean = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (
      this.allowEdit &&
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm(`Do you want to discard change?`);
    }

    return true;
  }

  ngOnInit(): void {
    // this.server = this.serversService.getServer(1);
    // this.serverName = this.server.name;
    // this.serverStatus = this.server.status;
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(parseInt(params["id"]));
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });
    this.route.queryParams.subscribe((params: Params) => {
      this.allowEdit = params["allowEdit"] === "true" ? true : false;
    });
    this.route.fragment.subscribe();
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
