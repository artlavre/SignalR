﻿using Microsoft.AspNetCore.SignalR;

namespace SignalR.Hubs
{
    public class UserHub : Hub
    {
        public static int TotalViews { get; set; } = 0;

        public static int TotalUsers { get; set; } = 0;

        public override Task OnConnectedAsync()
        {
            TotalUsers++;
            Clients.All.SendAsync("updateTotalUsers", TotalUsers).GetAwaiter().GetResult();
            return base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            TotalUsers--;
            await Clients.All.SendAsync("updateTotalUsers", TotalUsers);
            await base.OnDisconnectedAsync(exception);
        }

        public async Task<string> NewWindowLoaded(string name)
        {
            TotalViews++;
            //Send update to all clients that total views have been updated
            await Clients.All.SendAsync("updateTotalViews", TotalViews);
            return $"Total views {name} - {TotalViews}";
        }


    }
}
