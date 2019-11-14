EESchema Schematic File Version 4
LIBS:slade_project-cache
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
Wire Wire Line
	3150 3300 3450 3300
Wire Wire Line
	2600 3300 2850 3300
Wire Wire Line
	2600 3600 2600 3300
$Comp
L slade_project-rescue:R-Device Rs
U 1 1 5CF6568C
P 3000 3300
F 0 "Rs" V 2793 3300 50  0000 C CNN
F 1 "50" V 2884 3300 50  0000 C CNN
F 2 "" V 2930 3300 50  0001 C CNN
F 3 "~" H 3000 3300 50  0001 C CNN
	1    3000 3300
	0    1    1    0   
$EndComp
Wire Wire Line
	4350 3400 4350 3700
Wire Wire Line
	4350 4000 4350 4150
$Comp
L slade_project-rescue:L-Device L3
U 1 1 5CF78764
P 4350 3850
F 0 "L3" H 4402 3896 50  0000 L CNN
F 1 "13.2n" H 4402 3805 50  0000 L CNN
F 2 "" H 4350 3850 50  0001 C CNN
F 3 "~" H 4350 3850 50  0001 C CNN
	1    4350 3850
	1    0    0    -1  
$EndComp
$Comp
L slade_project-rescue:L-Device L2
U 1 1 5CF75633
P 4350 3250
F 0 "L2" H 4402 3296 50  0000 L CNN
F 1 "13.2n" H 4402 3205 50  0000 L CNN
F 2 "" H 4350 3250 50  0001 C CNN
F 3 "~" H 4350 3250 50  0001 C CNN
	1    4350 3250
	1    0    0    -1  
$EndComp
Wire Wire Line
	5900 3100 5700 3100
Wire Wire Line
	5700 3200 5700 3100
Wire Wire Line
	5700 2600 5700 2800
Connection ~ 5700 3100
$Comp
L slade_project-rescue:L-Device L1
U 1 1 5CF68363
P 5700 2950
F 0 "L1" H 5752 2996 50  0000 L CNN
F 1 "13.2n" H 5752 2905 50  0000 L CNN
F 2 "" H 5700 2950 50  0001 C CNN
F 3 "~" H 5700 2950 50  0001 C CNN
	1    5700 2950
	1    0    0    -1  
$EndComp
Wire Wire Line
	4000 3300 3750 3300
Wire Wire Line
	4000 3350 4000 3300
Wire Wire Line
	4150 3350 4000 3350
$Comp
L slade_project-rescue:C-Device Cb
U 1 1 5CF6396D
P 3600 3300
F 0 "Cb" V 3348 3300 50  0000 C CNN
F 1 "2n" V 3439 3300 50  0000 C CNN
F 2 "" H 3638 3150 50  0001 C CNN
F 3 "~" H 3600 3300 50  0001 C CNN
	1    3600 3300
	0    1    1    0   
$EndComp
$Comp
L slade_project-rescue:GND-power #PWR?
U 1 1 5CF61BD4
P 6200 4650
F 0 "#PWR?" H 6200 4400 50  0001 C CNN
F 1 "GND" H 6205 4477 50  0000 C CNN
F 2 "" H 6200 4650 50  0001 C CNN
F 3 "" H 6200 4650 50  0001 C CNN
	1    6200 4650
	1    0    0    -1  
$EndComp
Wire Wire Line
	5700 4100 5700 3600
Wire Wire Line
	5700 4100 5700 4250
Connection ~ 5700 4100
Wire Wire Line
	6200 4100 5700 4100
Wire Wire Line
	2600 4000 2600 4200
$Comp
L slade_project-rescue:GND-power #PWR?
U 1 1 5CF5E956
P 2600 4200
F 0 "#PWR?" H 2600 3950 50  0001 C CNN
F 1 "GND" H 2605 4027 50  0000 C CNN
F 2 "" H 2600 4200 50  0001 C CNN
F 3 "" H 2600 4200 50  0001 C CNN
	1    2600 4200
	1    0    0    -1  
$EndComp
Wire Wire Line
	4150 3400 4350 3400
Wire Wire Line
	4150 3350 4150 3400
$Comp
L slade_project-rescue:VSIN-Simulation_SPICE V1
U 1 1 5CF5DC71
P 2600 3800
F 0 "V1" H 2730 3891 50  0000 L CNN
F 1 "VSIN" H 2730 3800 50  0000 L CNN
F 2 "" H 2600 3800 50  0001 C CNN
F 3 "~" H 2600 3800 50  0001 C CNN
F 4 "Y" H 2600 3800 50  0001 L CNN "Spice_Netlist_Enabled"
F 5 "V" H 2600 3800 50  0001 L CNN "Spice_Primitive"
F 6 "sin(0 3 2.4G)" H 2730 3709 50  0000 L CNN "Spice_Model"
	1    2600 3800
	1    0    0    -1  
$EndComp
Wire Wire Line
	4350 4450 4350 4700
$Comp
L slade_project-rescue:GND-power #PWR?
U 1 1 5CF5C183
P 4350 4700
F 0 "#PWR?" H 4350 4450 50  0001 C CNN
F 1 "GND" H 4355 4527 50  0000 C CNN
F 2 "" H 4350 4700 50  0001 C CNN
F 3 "" H 4350 4700 50  0001 C CNN
	1    4350 4700
	1    0    0    -1  
$EndComp
$Comp
L slade_project-rescue:+10V-power #PWR?
U 1 1 5CF5B6FE
P 4350 2800
F 0 "#PWR?" H 4350 2650 50  0001 C CNN
F 1 "+10V" H 4365 2973 50  0000 C CNN
F 2 "" H 4350 2800 50  0001 C CNN
F 3 "" H 4350 2800 50  0001 C CNN
	1    4350 2800
	1    0    0    -1  
$EndComp
Connection ~ 4350 3400
Wire Wire Line
	5400 3400 4350 3400
$Comp
L slade_project-rescue:R-Device R2
U 1 1 5CF5A4CB
P 4350 4300
F 0 "R2" H 4420 4346 50  0000 L CNN
F 1 "2.8k" H 4420 4255 50  0000 L CNN
F 2 "" V 4280 4300 50  0001 C CNN
F 3 "~" H 4350 4300 50  0001 C CNN
	1    4350 4300
	1    0    0    -1  
$EndComp
$Comp
L slade_project-rescue:R-Device R1
U 1 1 5CF5A040
P 4350 2950
F 0 "R1" H 4420 2996 50  0000 L CNN
F 1 "2.8k" H 4420 2905 50  0000 L CNN
F 2 "" V 4280 2950 50  0001 C CNN
F 3 "~" H 4350 2950 50  0001 C CNN
	1    4350 2950
	1    0    0    -1  
$EndComp
Wire Wire Line
	6200 4100 6200 4350
$Comp
L slade_project-rescue:C-Device Ce
U 1 1 5CF58D78
P 6200 4500
F 0 "Ce" H 6315 4546 50  0000 L CNN
F 1 "2n" H 6315 4455 50  0000 L CNN
F 2 "" H 6238 4350 50  0001 C CNN
F 3 "~" H 6200 4500 50  0001 C CNN
	1    6200 4500
	1    0    0    -1  
$EndComp
Wire Wire Line
	5700 4550 5700 4700
$Comp
L slade_project-rescue:GND-power #PWR?
U 1 1 5CF56C05
P 5700 4700
F 0 "#PWR?" H 5700 4450 50  0001 C CNN
F 1 "GND" H 5705 4527 50  0000 C CNN
F 2 "" H 5700 4700 50  0001 C CNN
F 3 "" H 5700 4700 50  0001 C CNN
	1    5700 4700
	1    0    0    -1  
$EndComp
$Comp
L slade_project-rescue:R-Device Re
U 1 1 5CF56691
P 5700 4400
F 0 "Re" H 5770 4446 50  0000 L CNN
F 1 "10" H 5770 4355 50  0000 L CNN
F 2 "" V 5630 4400 50  0001 C CNN
F 3 "~" H 5700 4400 50  0001 C CNN
	1    5700 4400
	1    0    0    -1  
$EndComp
Wire Wire Line
	6750 3500 6750 3600
$Comp
L slade_project-rescue:GND-power #PWR?
U 1 1 5CF55D44
P 6750 3600
F 0 "#PWR?" H 6750 3350 50  0001 C CNN
F 1 "GND" H 6755 3427 50  0000 C CNN
F 2 "" H 6750 3600 50  0001 C CNN
F 3 "" H 6750 3600 50  0001 C CNN
	1    6750 3600
	1    0    0    -1  
$EndComp
Wire Wire Line
	6750 3100 6200 3100
Wire Wire Line
	6750 3200 6750 3100
$Comp
L slade_project-rescue:R-Device RL
U 1 1 5CF557D2
P 6750 3350
F 0 "RL" H 6820 3396 50  0000 L CNN
F 1 "50" H 6820 3305 50  0000 L CNN
F 2 "" V 6680 3350 50  0001 C CNN
F 3 "~" H 6750 3350 50  0001 C CNN
	1    6750 3350
	1    0    0    -1  
$EndComp
$Comp
L slade_project-rescue:C-Device Cc
U 1 1 5CF55140
P 6050 3100
F 0 "Cc" V 5798 3100 50  0000 C CNN
F 1 "2n" V 5889 3100 50  0000 C CNN
F 2 "" H 6088 2950 50  0001 C CNN
F 3 "~" H 6050 3100 50  0001 C CNN
	1    6050 3100
	0    1    1    0   
$EndComp
Wire Wire Line
	5700 2300 5700 2050
$Comp
L slade_project-rescue:+10V-power #PWR?
U 1 1 5CF54A1D
P 5700 2050
F 0 "#PWR?" H 5700 1900 50  0001 C CNN
F 1 "+10V" H 5715 2223 50  0000 C CNN
F 2 "" H 5700 2050 50  0001 C CNN
F 3 "" H 5700 2050 50  0001 C CNN
	1    5700 2050
	1    0    0    -1  
$EndComp
$Comp
L slade_project-rescue:R-Device Rc
U 1 1 5CF53FEC
P 5700 2450
F 0 "Rc" H 5770 2496 50  0000 L CNN
F 1 "25" H 5770 2405 50  0000 L CNN
F 2 "" V 5630 2450 50  0001 C CNN
F 3 "~" H 5700 2450 50  0001 C CNN
	1    5700 2450
	1    0    0    -1  
$EndComp
$Comp
L slade_project-rescue:2N2219-Transistor_BJT Q?
U 1 1 5CF53C10
P 5600 3400
F 0 "Q?" H 5790 3446 50  0000 L CNN
F 1 "2N2219" H 5790 3355 50  0000 L CNN
F 2 "Package_TO_SOT_THT:TO-39-3" H 5800 3325 50  0001 L CIN
F 3 "http://www.onsemi.com/pub_link/Collateral/2N2219-D.PDF" H 5600 3400 50  0001 L CNN
	1    5600 3400
	1    0    0    -1  
$EndComp
$EndSCHEMATC
