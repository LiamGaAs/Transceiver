In order to achieve the DC analysis of the circuit.

Once you have finished to draw your schematic : 

1 : Goto "Generate netlist file"

2 : Go in "Spice" tab.

3 : Check "defaut format" option.

4 : save the generated file (a .cir file) to the wanted location

5 : open this file with a text editor and add .OP at the just before the .end line
Thanks to this, you will be able to achieve a dc analysis of your circuit

5 : Once saved,open a terminal and go to the repository where your .cir file has been saved

6 : Type "ngspice nameofyourfile.cir" . Then type "run".
Normally, a line named "No. of Data Rows : 1 " shoud appear. If yes, it means the dc analysis has been taken into account.

7 : Then, to print a voltage , type "print v(nameofthepad)" in order to see the voltage of a given pad. A pad (or label) name could be "Vc" for the collector voltage, for example.
print v(Vc) woud print the collector's voltage.


