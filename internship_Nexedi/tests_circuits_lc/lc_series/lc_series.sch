EESchema Schematic File Version 4
EELAYER 29 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L Device:R Rs
U 1 1 5D26C4DC
P 3550 4300
F 0 "Rs" V 3343 4300 50  0000 C CNN
F 1 "50" V 3434 4300 50  0000 C CNN
F 2 "" V 3480 4300 50  0001 C CNN
F 3 "~" H 3550 4300 50  0001 C CNN
	1    3550 4300
	0    1    1    0   
$EndComp
$Comp
L Device:R RL
U 1 1 5D26CC76
P 8200 4600
F 0 "RL" H 8270 4646 50  0000 L CNN
F 1 "50" H 8270 4555 50  0000 L CNN
F 2 "" V 8130 4600 50  0001 C CNN
F 3 "~" H 8200 4600 50  0001 C CNN
	1    8200 4600
	1    0    0    -1  
$EndComp
$Comp
L Device:C C1
U 1 1 5D26D0A5
P 5350 4300
F 0 "C1" V 5098 4300 50  0000 C CNN
F 1 "6p" V 5189 4300 50  0000 C CNN
F 2 "" H 5388 4150 50  0001 C CNN
F 3 "~" H 5350 4300 50  0001 C CNN
	1    5350 4300
	0    1    1    0   
$EndComp
$Comp
L Device:L L1
U 1 1 5D26D523
P 4450 4300
F 0 "L1" V 4640 4300 50  0000 C CNN
F 1 "1.15n" V 4549 4300 50  0000 C CNN
F 2 "" H 4450 4300 50  0001 C CNN
F 3 "~" H 4450 4300 50  0001 C CNN
	1    4450 4300
	0    -1   -1   0   
$EndComp
Wire Wire Line
	8200 4300 8200 4450
Wire Wire Line
	5200 4300 4600 4300
Wire Wire Line
	4300 4300 3700 4300
$Comp
L pspice:VSOURCE V1
U 1 1 5D26DBB2
P 3150 4650
F 0 "V1" H 3378 4696 50  0000 L CNN
F 1 "VSOURCE" H 3378 4605 50  0000 L CNN
F 2 "" H 3150 4650 50  0001 C CNN
F 3 "~" H 3150 4650 50  0001 C CNN
F 4 "V" H 3150 4650 50  0001 C CNN "Spice_Primitive"
F 5 "ac 1" H 3150 4650 50  0001 C CNN "Spice_Model"
F 6 "Y" H 3150 4650 50  0001 C CNN "Spice_Netlist_Enabled"
	1    3150 4650
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR?
U 1 1 5D26DE8E
P 8200 4750
F 0 "#PWR?" H 8200 4500 50  0001 C CNN
F 1 "GND" H 8205 4577 50  0000 C CNN
F 2 "" H 8200 4750 50  0001 C CNN
F 3 "" H 8200 4750 50  0001 C CNN
	1    8200 4750
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR?
U 1 1 5D26E22A
P 3150 4950
F 0 "#PWR?" H 3150 4700 50  0001 C CNN
F 1 "GND" H 3155 4777 50  0000 C CNN
F 2 "" H 3150 4950 50  0001 C CNN
F 3 "" H 3150 4950 50  0001 C CNN
	1    3150 4950
	1    0    0    -1  
$EndComp
Wire Wire Line
	3150 4350 3150 4300
Wire Wire Line
	3150 4300 3400 4300
Text GLabel 8600 4300 2    50   Output ~ 0
output
Wire Wire Line
	8600 4300 8200 4300
Connection ~ 8200 4300
$Comp
L Device:L L2
U 1 1 5D270107
P 5950 4300
F 0 "L2" V 6140 4300 50  0000 C CNN
F 1 "1.15n" V 6049 4300 50  0000 C CNN
F 2 "" H 5950 4300 50  0001 C CNN
F 3 "~" H 5950 4300 50  0001 C CNN
	1    5950 4300
	0    -1   -1   0   
$EndComp
$Comp
L Device:C C2
U 1 1 5D270736
P 6600 4300
F 0 "C2" V 6348 4300 50  0000 C CNN
F 1 "6p" V 6439 4300 50  0000 C CNN
F 2 "" H 6638 4150 50  0001 C CNN
F 3 "~" H 6600 4300 50  0001 C CNN
	1    6600 4300
	0    1    1    0   
$EndComp
Wire Wire Line
	6750 4300 8200 4300
Wire Wire Line
	6450 4300 6100 4300
$Comp
L Device:C Cd1
U 1 1 5D27269F
P 5650 4300
F 0 "Cd1" V 5398 4300 50  0000 C CNN
F 1 "100n" V 5489 4300 50  0000 C CNN
F 2 "" H 5688 4150 50  0001 C CNN
F 3 "~" H 5650 4300 50  0001 C CNN
	1    5650 4300
	0    1    1    0   
$EndComp
$EndSCHEMATC
