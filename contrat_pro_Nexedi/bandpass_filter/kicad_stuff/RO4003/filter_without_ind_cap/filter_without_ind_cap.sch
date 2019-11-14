EESchema Schematic File Version 4
LIBS:filter_without_ind_cap-cache
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
L sma_custom_connector:sma_connector SMA2
U 1 1 5DCBEB5D
P 6400 4350
F 0 "SMA2" H 6668 4401 50  0000 L CNN
F 1 "sma_connector" H 6668 4310 50  0000 L CNN
F 2 "sma_custom:CONSMA003.062-G" H 6350 4800 50  0001 C CNN
F 3 "" H 6350 4800 50  0001 C CNN
	1    6400 4350
	1    0    0    -1  
$EndComp
$Comp
L sma_custom_connector:sma_connector SMA1
U 1 1 5DCBE70C
P 2400 4350
F 0 "SMA1" H 2288 3985 50  0000 C CNN
F 1 "sma_connector" H 2288 4076 50  0000 C CNN
F 2 "sma_custom:CONSMA003.062-G" H 2350 4800 50  0001 C CNN
F 3 "" H 2350 4800 50  0001 C CNN
	1    2400 4350
	-1   0    0    1   
$EndComp
$Comp
L power:GND #PWR0101
U 1 1 5DCBF534
P 5950 4500
F 0 "#PWR0101" H 5950 4250 50  0001 C CNN
F 1 "GND" H 5955 4327 50  0000 C CNN
F 2 "" H 5950 4500 50  0001 C CNN
F 3 "" H 5950 4500 50  0001 C CNN
	1    5950 4500
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR0102
U 1 1 5DCBFC68
P 2850 4500
F 0 "#PWR0102" H 2850 4250 50  0001 C CNN
F 1 "GND" H 2855 4327 50  0000 C CNN
F 2 "" H 2850 4500 50  0001 C CNN
F 3 "" H 2850 4500 50  0001 C CNN
	1    2850 4500
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR0103
U 1 1 5DCC0DE6
P 2850 4200
F 0 "#PWR0103" H 2850 3950 50  0001 C CNN
F 1 "GND" H 2855 4027 50  0000 C CNN
F 2 "" H 2850 4200 50  0001 C CNN
F 3 "" H 2850 4200 50  0001 C CNN
	1    2850 4200
	-1   0    0    1   
$EndComp
$Comp
L power:GND #PWR0104
U 1 1 5DCC113A
P 5950 4200
F 0 "#PWR0104" H 5950 3950 50  0001 C CNN
F 1 "GND" H 5955 4027 50  0000 C CNN
F 2 "" H 5950 4200 50  0001 C CNN
F 3 "" H 5950 4200 50  0001 C CNN
	1    5950 4200
	-1   0    0    1   
$EndComp
$Comp
L Device:C C1
U 1 1 5DCC26D1
P 3250 4350
F 0 "C1" V 2998 4350 50  0000 C CNN
F 1 "10n" V 3089 4350 50  0000 C CNN
F 2 "Capacitor_Tantalum_SMD:CP_EIA-1608-08_AVX-J_Pad1.25x1.05mm_HandSolder" H 3288 4200 50  0001 C CNN
F 3 "~" H 3250 4350 50  0001 C CNN
	1    3250 4350
	0    1    1    0   
$EndComp
Wire Wire Line
	3100 4350 2850 4350
$Comp
L Device:L L1
U 1 1 5DCC2D19
P 3650 4600
F 0 "L1" H 3702 4646 50  0000 L CNN
F 1 "5.1n" H 3702 4555 50  0000 L CNN
F 2 "Inductor_SMD:L_0603_1608Metric_Pad1.05x0.95mm_HandSolder" H 3650 4600 50  0001 C CNN
F 3 "~" H 3650 4600 50  0001 C CNN
	1    3650 4600
	1    0    0    -1  
$EndComp
$Comp
L Device:C C3
U 1 1 5DCC3077
P 4050 4350
F 0 "C3" V 4302 4350 50  0000 C CNN
F 1 "3.9p" V 4211 4350 50  0000 C CNN
F 2 "Capacitor_Tantalum_SMD:CP_EIA-1608-08_AVX-J_Pad1.25x1.05mm_HandSolder" H 4088 4200 50  0001 C CNN
F 3 "~" H 4050 4350 50  0001 C CNN
	1    4050 4350
	0    -1   -1   0   
$EndComp
Wire Wire Line
	3400 4350 3650 4350
Wire Wire Line
	3650 4450 3650 4350
Connection ~ 3650 4350
Wire Wire Line
	3650 4350 3900 4350
$Comp
L power:GND #PWR0105
U 1 1 5DCC3685
P 3650 4750
F 0 "#PWR0105" H 3650 4500 50  0001 C CNN
F 1 "GND" H 3655 4577 50  0000 C CNN
F 2 "" H 3650 4750 50  0001 C CNN
F 3 "" H 3650 4750 50  0001 C CNN
	1    3650 4750
	1    0    0    -1  
$EndComp
NoConn ~ 4400 4350
Wire Wire Line
	4400 4350 4200 4350
$Comp
L Device:C C2
U 1 1 5DCC4E19
P 5650 4350
F 0 "C2" V 5398 4350 50  0000 C CNN
F 1 "10n" V 5489 4350 50  0000 C CNN
F 2 "Capacitor_Tantalum_SMD:CP_EIA-1608-08_AVX-J_Pad1.25x1.05mm_HandSolder" H 5688 4200 50  0001 C CNN
F 3 "~" H 5650 4350 50  0001 C CNN
	1    5650 4350
	0    1    1    0   
$EndComp
$Comp
L Device:L L2
U 1 1 5DCC528C
P 5350 4650
F 0 "L2" H 5307 4604 50  0000 R CNN
F 1 "5.1n" H 5307 4695 50  0000 R CNN
F 2 "Inductor_SMD:L_0603_1608Metric_Pad1.05x0.95mm_HandSolder" H 5350 4650 50  0001 C CNN
F 3 "~" H 5350 4650 50  0001 C CNN
	1    5350 4650
	-1   0    0    1   
$EndComp
$Comp
L Device:C C4
U 1 1 5DCC58F2
P 5050 4350
F 0 "C4" V 4798 4350 50  0000 C CNN
F 1 "3.9p" V 4889 4350 50  0000 C CNN
F 2 "Capacitor_Tantalum_SMD:CP_EIA-1608-08_AVX-J_Pad1.25x1.05mm_HandSolder" H 5088 4200 50  0001 C CNN
F 3 "~" H 5050 4350 50  0001 C CNN
	1    5050 4350
	0    1    1    0   
$EndComp
Wire Wire Line
	5500 4350 5350 4350
Wire Wire Line
	5350 4500 5350 4350
Connection ~ 5350 4350
Wire Wire Line
	5350 4350 5200 4350
Wire Wire Line
	5800 4350 5950 4350
$Comp
L power:GND #PWR0106
U 1 1 5DCC6233
P 5350 4800
F 0 "#PWR0106" H 5350 4550 50  0001 C CNN
F 1 "GND" H 5355 4627 50  0000 C CNN
F 2 "" H 5350 4800 50  0001 C CNN
F 3 "" H 5350 4800 50  0001 C CNN
	1    5350 4800
	1    0    0    -1  
$EndComp
NoConn ~ 4700 4350
Wire Wire Line
	4700 4350 4900 4350
$EndSCHEMATC
