using Microsoft.AspNetCore.SignalR;

namespace SignalR.Hubs
{
    public class DeathlyHallowHub: Hub
    {
        public Dictionary<string, int> GetRaceStatus()
        {
            return SD.DeathlyHallowRace;
        }
    }
}
