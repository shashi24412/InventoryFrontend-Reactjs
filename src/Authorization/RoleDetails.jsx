export const Roles = {
    ADMIN: 'admin',
    DOCTOR: 'doctor',
    FRONTUSER: 'frontuser',
    SCMMANAGER: 'SCMManager'
}

export const RolePermission = {
    '/DepartmentIndent': [Roles.ADMIN, Roles.SCMMANAGER],
    '/': [Roles.ADMIN, Roles.FRONTUSER, Roles.DOCTOR, Roles.SCMMANAGER],
    '/DepartmentApproval': [Roles.ADMIN, Role.SCMMANAGER],
    '/Store': [Roles.ADMIN, Role.SCMMANAGER],
    '/ItemMaster': [Roles.ADMIN, Role.SCMMANAGER],

}