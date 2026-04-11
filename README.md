# hide-zorin-boot-logo

To hide the Zorin logo while booting:

1. Download the this repo [as a zip](https://github.com/TheJaredWilcurt/hide-zorin-boot-logo/archive/refs/heads/main.zip)
1. Pull out the files in the "blank" folder and drop them into:
   * `/usr/share/plymouth/themes/zorin-logo`
   * Replace the contents of the folder with the files from the "blank" folder
1. Run `sudo update-initramfs -u`


## How to copy files to a locked folder?

You'll need root permission. I installed a different file explorer called "Thunar". Then ran in the terminal `sudo thunar` to open it with root permissions. Then I navigated to the "blank" folder, select all, right-click > cut, then navigated to the "zorin-logo" folder and pasted them, saying "Replace all". After that you can close Thunar. Then run `sudo update-initramfs -u` to apply the changes and reboot.

