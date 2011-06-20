Tuning Windows Server 2003 For Development Work
===============================================

If you are doing your .Net development work on Windows Server 2003 either as the host or inside a virtual machine You can get a decent speed increase if you tweak the performance settings, the default dev VM does not have these settings applied:

Start > My Computer > Right CLick > Properties > Advanced > Performance Settings:

Choose adjust for best performance
On the advanced tab choose adjust best performance for programs in both processor scheduling and memory usage.

Furthermore, there are 5 services you can safely disable:

1. ERSvc - Error Reporting Service

2. HidServ - Human Interface Device Access

3. IsmServ - Intersite Messaging

4. ScardSvr - Smart Card Access

5. LMHosts - TCP/IP NetBIOS Helper

There is a video here explaining why these are safe to turn off and others which may be worth investigating:

http://www.techrepublic.com/blog/itdojo/video-five-services-you-can-turn-off-in-windows-server-2003/129

Obviously assigning at least 2 processors and 4Gb of RAM is more-or-less essential too if you don't want to tear your hair out!
