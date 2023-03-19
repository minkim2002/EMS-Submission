using System.DirectoryServices.AccountManagement;

namespace EMSApp.Utilities
{
    public class UserName
    {
        public static string GetUsername(string userName)
        {
            string name = string.Empty;

            PrincipalContext ctx = new PrincipalContext(ContextType.Domain);
            UserPrincipal user = UserPrincipal.FindByIdentity(ctx, userName);

            var givenName = user.GivenName;
            var surName = user.Surname;
            var middleName = user.MiddleName;

            if (string.IsNullOrEmpty(middleName))
            {
                name = $"{givenName} {surName}";
            }
            else
                name = $"{givenName} {middleName.Substring(0, 1)} {surName}";

            return name;
        }
    }
}
