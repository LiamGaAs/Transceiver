EESchema Schematic File Version 4
LIBS:projet_mesures-cache
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
L projet_mesures-rescue:2N2219-Transistor_BJT Q1
U 1 1 5D1B3655
P 5450 5350
F 0 "Q1" H 5640 5396 50  0000 L CNN
F 1 "2N2219" H 5640 5305 50  0000 L CNN
F 2 "Package_TO_SOT_THT:TO-39-3" H 5650 5275 50  0001 L CIN
F 3 "http://www.onsemi.com/pub_link/Collateral/2N2219-D.PDF" H 5450 5350 50  0001 L CNN
F 4 "Q" H 5450 5350 50  0001 C CNN "Spice_Primitive"
F 5 "2N2219" H 5450 5350 50  0001 C CNN "Spice_Model"
F 6 "Y" H 5450 5350 50  0001 C CNN "Spice_Netlist_Enabled"
F 7 "2N2219.LIB" H 5450 5350 50  0001 C CNN "Spice_Lib_File"
	1    5450 5350
	1    0    0    -1  
$EndComp
$Comp
L projet_mesures-rescue:R-Device Rc
U 1 1 5D1B43A8
P 5550 4800
F 0 "Rc" H 5620 4846 50  0000 L CNN
F 1 "20" H 5620 4755 50  0000 L CNN
F 2 "" V 5480 4800 50  0001 C CNN
F 3 "~" H 5550 4800 50  0001 C CNN
	1    5550 4800
	1    0    0    -1  
$EndComp
$Comp
L projet_mesures-rescue:R-Device Re
U 1 1 5D1B4688
P 5550 5800
F 0 "Re" H 5620 5846 50  0000 L CNN
F 1 "12" H 5620 5755 50  0000 L CNN
F 2 "" V 5480 5800 50  0001 C CNN
F 3 "~" H 5550 5800 50  0001 C CNN
	1    5550 5800
	1    0    0    -1  
$EndComp
$Comp
L projet_mesures-rescue:R-Device Rl
U 1 1 5D1B4979
P 6750 5450
F 0 "Rl" H 6820 5496 50  0000 L CNN
F 1 "1MEG" H 6820 5405 50  0000 L CNN
F 2 "" V 6680 5450 50  0001 C CNN
F 3 "~" H 6750 5450 50  0001 C CNN
	1    6750 5450
	1    0    0    -1  
$EndComp
$Comp
L projet_mesures-rescue:C-Device Cc
U 1 1 5D1B4C68
P 6000 5050
F 0 "Cc" V 5748 5050 50  0000 C CNN
F 1 "10u" V 5839 5050 50  0000 C CNN
F 2 "" H 6038 4900 50  0001 C CNN
F 3 "~" H 6000 5050 50  0001 C CNN
	1    6000 5050
	0    1    1    0   
$EndComp
$Comp
L projet_mesures-rescue:C-Device Ce
U 1 1 5D1B5012
P 5950 5800
F 0 "Ce" H 6065 5846 50  0000 L CNN
F 1 "2u" H 6065 5755 50  0000 L CNN
F 2 "" H 5988 5650 50  0001 C CNN
F 3 "~" H 5950 5800 50  0001 C CNN
	1    5950 5800
	1    0    0    -1  
$EndComp
$Comp
L projet_mesures-rescue:VSOURCE-pspice V1
U 1 1 5D1B5416
P 3750 5800
F 0 "V1" H 3978 5846 50  0000 L CNN
F 1 "VSOURCE" H 3978 5755 50  0000 L CNN
F 2 "" H 3750 5800 50  0001 C CNN
F 3 "~" H 3750 5800 50  0001 C CNN
F 4 "V" H 3750 5800 50  0001 C CNN "Spice_Primitive"
F 5 "ac 1 sin(0 10m 1Meg)" H 3750 5800 50  0001 C CNN "Spice_Model"
F 6 "Y" H 3750 5800 50  0001 C CNN "Spice_Netlist_Enabled"
	1    3750 5800
	1    0    0    -1  
$EndComp
$Comp
L projet_mesures-rescue:VSOURCE-pspice V2
U 1 1 5D1B583D
P 4750 4000
F 0 "V2" H 4384 3954 50  0000 R CNN
F 1 "VSOURCE" H 4384 4045 50  0000 R CNN
F 2 "" H 4750 4000 50  0001 C CNN
F 3 "~" H 4750 4000 50  0001 C CNN
F 4 "V" H 4750 4000 50  0001 C CNN "Spice_Primitive"
F 5 "dc 10" H 4750 4000 50  0001 C CNN "Spice_Model"
F 6 "Y" H 4750 4000 50  0001 C CNN "Spice_Netlist_Enabled"
	1    4750 4000
	-1   0    0    1   
$EndComp
$Comp
L projet_mesures-rescue:GND-power #PWR?
U 1 1 5D1B6779
P 3750 6200
F 0 "#PWR?" H 3750 5950 50  0001 C CNN
F 1 "GND" H 3755 6027 50  0000 C CNN
F 2 "" H 3750 6200 50  0001 C CNN
F 3 "" H 3750 6200 50  0001 C CNN
	1    3750 6200
	1    0    0    -1  
$EndComp
$Comp
L projet_mesures-rescue:GND-power #PWR?
U 1 1 5D1B6B03
P 5550 6050
F 0 "#PWR?" H 5550 5800 50  0001 C CNN
F 1 "GND" H 5555 5877 50  0000 C CNN
F 2 "" H 5550 6050 50  0001 C CNN
F 3 "" H 5550 6050 50  0001 C CNN
	1    5550 6050
	1    0    0    -1  
$EndComp
$Comp
L projet_mesures-rescue:GND-power #PWR?
U 1 1 5D1B6E6B
P 4750 3600
F 0 "#PWR?" H 4750 3350 50  0001 C CNN
F 1 "GND" H 4755 3427 50  0000 C CNN
F 2 "" H 4750 3600 50  0001 C CNN
F 3 "" H 4750 3600 50  0001 C CNN
	1    4750 3600
	-1   0    0    1   
$EndComp
$Comp
L projet_mesures-rescue:GND-power #PWR?
U 1 1 5D1B7485
P 6750 5700
F 0 "#PWR?" H 6750 5450 50  0001 C CNN
F 1 "GND" H 6755 5527 50  0000 C CNN
F 2 "" H 6750 5700 50  0001 C CNN
F 3 "" H 6750 5700 50  0001 C CNN
	1    6750 5700
	1    0    0    -1  
$EndComp
$Comp
L projet_mesures-rescue:R-Device R2
U 1 1 5D1B7807
P 4550 5750
F 0 "R2" H 4620 5796 50  0000 L CNN
F 1 "1.8k" H 4620 5705 50  0000 L CNN
F 2 "" V 4480 5750 50  0001 C CNN
F 3 "~" H 4550 5750 50  0001 C CNN
	1    4550 5750
	1    0    0    -1  
$EndComp
$Comp
L projet_mesures-rescue:R-Device R1
U 1 1 5D1B7C66
P 4550 4850
F 0 "R1" H 4620 4896 50  0000 L CNN
F 1 "2.8k" H 4620 4805 50  0000 L CNN
F 2 "" V 4480 4850 50  0001 C CNN
F 3 "~" H 4550 4850 50  0001 C CNN
	1    4550 4850
	1    0    0    -1  
$EndComp
Wire Wire Line
	4550 4700 4550 4300
Wire Wire Line
	4550 4300 4750 4300
Wire Wire Line
	5550 4650 5550 4300
Wire Wire Line
	5550 4300 4750 4300
Connection ~ 4750 4300
Wire Wire Line
	5550 4950 5550 5050
Wire Wire Line
	5850 5050 5550 5050
Connection ~ 5550 5050
Wire Wire Line
	5550 5050 5550 5150
Wire Wire Line
	6150 5050 6750 5050
Wire Wire Line
	6750 5050 6750 5300
Wire Wire Line
	6750 5600 6750 5700
Wire Wire Line
	5550 5650 5550 5600
Wire Wire Line
	5950 5650 5950 5600
Wire Wire Line
	5950 5600 5550 5600
Connection ~ 5550 5600
Wire Wire Line
	5550 5600 5550 5550
Wire Wire Line
	5950 5950 5950 6000
Wire Wire Line
	5950 6000 5550 6000
Wire Wire Line
	5550 6000 5550 6050
Wire Wire Line
	5550 5950 5550 6000
Connection ~ 5550 6000
Wire Wire Line
	4550 5600 4550 5350
Wire Wire Line
	5250 5350 4550 5350
Connection ~ 4550 5350
Wire Wire Line
	4550 5350 4550 5000
Wire Wire Line
	3750 5500 3750 5350
$Comp
L projet_mesures-rescue:GND-power #PWR?
U 1 1 5D1BB82A
P 4550 6000
F 0 "#PWR?" H 4550 5750 50  0001 C CNN
F 1 "GND" H 4555 5827 50  0000 C CNN
F 2 "" H 4550 6000 50  0001 C CNN
F 3 "" H 4550 6000 50  0001 C CNN
	1    4550 6000
	1    0    0    -1  
$EndComp
Wire Wire Line
	4550 5900 4550 6000
Wire Wire Line
	3750 6100 3750 6200
$Comp
L projet_mesures-rescue:C-Device Cb
U 1 1 5D1BDD03
P 4150 5350
F 0 "Cb" V 3898 5350 50  0000 C CNN
F 1 "10u" V 3989 5350 50  0000 C CNN
F 2 "" H 4188 5200 50  0001 C CNN
F 3 "~" H 4150 5350 50  0001 C CNN
	1    4150 5350
	0    1    1    0   
$EndComp
Wire Wire Line
	4550 5350 4300 5350
Wire Wire Line
	4000 5350 3750 5350
Wire Wire Line
	4750 3600 4750 3700
Text GLabel 3350 5350 0    50   Input ~ 0
in
Wire Wire Line
	3350 5350 3750 5350
Connection ~ 3750 5350
Text GLabel 7050 5050 2    50   Output ~ 0
out
Wire Wire Line
	7050 5050 6750 5050
Connection ~ 6750 5050
$EndSCHEMATC
