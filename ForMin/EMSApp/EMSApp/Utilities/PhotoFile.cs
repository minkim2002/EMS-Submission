namespace EMSApp.Utilities
{
    public class PhotoFile
    {
        public static string SetUserPhoto(string userName, string host)
        {
            string userId = userName.ToUpper().Replace("FFX\\", "");
            string photoName = string.Empty;
            string pngFile = string.Empty;
            string jpgFile = string.Empty;

            if (host.ToLower().Equals("localhost"))
            {
                pngFile = $"M:\\wwwroot\\images\\stafflocator\\{userId}.png";
                jpgFile = $"M:\\wwwroot\\images\\stafflocator\\{userId}.jpg";
            }
            else
            {
                pngFile = $"e:\\inetpub\\wwwroot\\images\\stafflocator\\{userId}.png";
                jpgFile = $"e:\\inetpub\\wwwroot\\images\\stafflocator\\{userId}.jpg";
            }


            if (File.Exists(pngFile))
                photoName = $"https://firenet/images/stafflocator/{userId}.png";
            else if (File.Exists(jpgFile))
                photoName = $"https://firenet/images/stafflocator/{userId}.jpg";
            else
                photoName = $"https://firenet/images/stafflocator/NoPhoto.png";

            return photoName;
        }
    }
}
