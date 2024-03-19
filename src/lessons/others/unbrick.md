# Bricked it?
::: info 备注
搬运自[mat1jaczyyy](https://github.com/mat1jaczyyy/lpp-performance-cfw/blob/master/unbrick.md)
还没翻译，部分链接已损坏mat没更新
:::

Your Launchpad should never get bricked if you're just regularly using the firmware, but if you're making modifications while developing, it can happen time to time. You can easily recognize a brick by the inability to boot into the bootloader. Having unbootable firmware means you just need to flash a fresh one, while being unable to reach the bootloader means you can't upload any code to your Launchpad anymore.

Please don't do this unless you actually know what you're doing!

## Required tools

* A bricked Launchpad Pro :(
* A cheap [ST-LINK V2](https://www.ebay.com/itm/ST-Link-V2-Mini-Debugger-und-Programmier-Emulator-fur-STM8-STM32-Arduino/392963947934)
* The [STM32 ST-LINK Utility](/resources/unbrick/STM32%20ST-LINK%20Utility%20v4.4.0%20setup.exe)
* 4 female-to-male jumper wires
* A [backup of the Launchpad Pro's memory](https://cdn.discordapp.com/attachments/636554539096473600/826560546890579998/pro_backup.bin)

## Perform surgery on the hardware

Disassemble the Launchpad Pro, only detaching the power management module. Make sure not to lose the tiny power button! With the CPU exposed, connect the following points to the ST-LINK. You'll likely have to hold the connection to `SWDIO` yourself, rather than having it keep itself plugged in:

![ST-LINK Connection Diagram](/img/other/brick/1.png)

## Reflash the memory

Run the ST-LINK Utility. Make sure your ST-LINK's firmware is updated:

![ST-LINK Firmware Update](/img/other/brick/2.png)

Connect to the bricked Launchpad Pro:

![A trashed bootloader](/img/other/brick/3.png)

Program & Verify the memory backup file:

![Fixing it...](/img/other/brick/4.png)

After you're done flashing, disconnect the ST-LINK and the Launchpad should boot to Vegas mode straight away.

![Fixed!](/img/other/brick/5.png)

Have fun reassembling it :)
