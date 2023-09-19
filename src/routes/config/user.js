import PageNotFound from "../Components/PageNotFound";
import UserSignin from "../../Modules/Auth/Container/index";
import { AdminHome } from "../../Modules/Home/AdminHome";
import { Catagory } from "../../Modules/Catagory/Catagory";
import { Roles } from "../../Modules/Roles/Roles";
import { Service } from "../../Modules/Service/Service";
import { ServiceCenter } from "../../Modules/ServiceCenter/ServiceCenter";
import { ServiceRequested } from "../../Modules/ServiceRequested/ServiceRequested";
import { AddCategory } from "../../Modules/Catagory/AddCategory";
import { AddAdmin } from "../../Modules/Home/AddAdmin";
import { Agrosmart } from "../../Modules/Agrosmart/Agrosmart";
import { Manageusers } from "../../Modules/Manageusers/Manageusers";
import { ManageFrontend, ManagefFrontend } from "../../Modules/ManageFrontend/ManageFrontend";
import { AddService } from "../../Modules/Service/AddService";
import { AddServiceCenter } from "../../Modules/ServiceCenter/AddServiceCenter";
import { AddRoles } from "../../Modules/Roles/AddRoles";
import { Adimage } from "../../Modules/ManageFrontend/Ad_image";
import { Login } from "../../Modules/Login/Partials/Login";
import { EditProfile } from "../../Modules/Profile/EditProfile";
import { Profile } from "../../Modules/Profile/Profile";
import { AddBottom } from "../../Modules/ManageFrontend/AddBottom";
import { AddTrendings } from "../../Modules/ManageFrontend/AddTrendings";



export const anonymous = [
  {
    routePath: "/signin",
    Component: UserSignin,
  },
];

export const authenticated = [
  {
    routePath: "/",
    Component: AdminHome,
  },
  {
    routePath: "/catagory",
    Component: Catagory,
  },
  {
    routePath: "/roles",
    Component: Roles,
  },
  {
    routePath: "/service",
    Component: Service,
  },
  {
    routePath: "/service_center",
    Component: ServiceCenter,
  },
  {
    routePath: "/service_requested",
    Component: ServiceRequested,
  },
  {
    routePath: "/add_category",
    Component: AddCategory,
  },
  {
    routePath: "/add_admin",
    Component: AddAdmin,
  },
  {
    routePath: "/agro",
    Component: Agrosmart,
  },
  {
    routePath: "/users",
    Component:Manageusers,
  },
  {
    routePath: "/frontend",
    Component:ManageFrontend,
  },
  {
    routePath: "/ad_image",
    Component:Adimage,
  },

  {
    routePath: "/add_service",
    Component: AddService,
  },
  {
    routePath: "/login",
    Component:   Login,
  },
  {
    routePath: "/Addbottom",
    Component:   AddBottom,
  },
  {
    routePath: "/Addtd",
    Component:   AddTrendings,
  },
  {
    routePath: "/profile",
    Component:   Profile,
  },
  {
    routePath: "/editprofile",
    Component:   EditProfile,
  },
  {
    routePath: "/add_scenter",
    Component: AddServiceCenter,
  },
  {
    routePath: "/add_roles",
    Component: AddRoles,
  },
];
