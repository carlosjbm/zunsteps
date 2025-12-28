import { zunacc } from "@/app/lib/modulos/zunacc";
import { zunaft } from "@/app/lib/modulos/zunaft";
import { zunhr } from "@/app/lib/modulos/zunhr";
import { zunpr } from "@/app/lib/modulos/zunpr";
import { zunst } from "@/app/lib/modulos/zunst";

export function allModules() {
  const modules = {
    name: "data-modules",
    data: [zunacc, zunaft, zunhr, zunpr, zunst],
  };
  return modules;
}
