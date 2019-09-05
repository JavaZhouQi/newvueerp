
export function hasPermission(permission){
    let permissions = sessionStorage.getItem("permissions")
    return permissions.indexOf(permission) > -1;
}