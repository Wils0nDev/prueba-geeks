import { MenuItem } from "../shared/models/general/menu/menu.response.interface";

export const menuData : MenuItem[] = [
  {
      "label": "Listado",
      "icon": "label",
      "url": "./list-character",      
  },
  {
    "label": "Detalle",
    "icon": "search",
    "url": "./detail-character",      
}
]