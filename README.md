# hide-zorin-boot-logo

[Live demo](https://TheJaredWilcurt.com/hide-zorin-boot-logo)

To hide the Zorin logo while booting:

1. Download this repo [as a zip](https://github.com/TheJaredWilcurt/hide-zorin-boot-logo/archive/refs/heads/main.zip)
1. Pull out the files in the "blank" folder and drop them into:
   * `/usr/share/plymouth/themes/zorin-logo`
   * Replace the contents of the folder with the files from the "blank" folder
1. Run `sudo update-initramfs -u`
1. Reboot to see the changes


## How to copy files to a locked folder?

You'll need root permission. I installed a different file explorer called "Thunar". Then ran in the terminal `sudo thunar` to open it with root permissions. Then I navigated to the "blank" folder, select all, right-click > cut, then navigated to the "zorin-logo" folder and pasted them, saying "Replace all". After that you can close Thunar. Then run `sudo update-initramfs -u` to apply the changes and reboot.


## Reverting the changes

If you want the Zorin logo back, do the exact same steps, but use the files in the "original" folder instead of "blank".

You can also create any custom animations you want for these and use those too, which is pretty cool. Computers are neat :)

I wonder if you could do a funny gif of a cat jumping up and down 🤔
