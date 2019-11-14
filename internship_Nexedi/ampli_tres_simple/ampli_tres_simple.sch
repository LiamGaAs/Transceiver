EESchema Schematic File Version 4
LIBS:ampli_tres_simple-cache
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
L ampli_tres_simple-rescue:R-Device Rc1
U 1 1 5CFC16A7
P 4000 4550
F 0 "Rc1" H 4070 4596 50  0000 L CNN
F 1 "20" H 4070 4505 50  0000 L CNN
F 2 "Resistor_SMD:R_1020_2550Metric_Pad1.33x5.20mm_HandSolder" V 3930 4550 50  0001 C CNN
F 3 "~" H 4000 4550 50  0001 C CNN
	1    4000 4550
	1    0    0    -1  
$EndComp
$Comp
L ampli_tres_simple-rescue:R-Device Re1
U 1 1 5CFC2981
P 4000 5500
F 0 "Re1" H 4070 5546 50  0000 L CNN
F 1 "12" H 4070 5455 50  0000 L CNN
F 2 "Resistor_SMD:R_1206_3216Metric_Pad1.42x1.75mm_HandSolder" V 3930 5500 50  0001 C CNN
F 3 "~" H 4000 5500 50  0001 C CNN
	1    4000 5500
	1    0    0    -1  
$EndComp
$Comp
L ampli_tres_simple-rescue:GND-power #PWR0101
U 1 1 5CFC2EBF
P 4000 5700
F 0 "#PWR0101" H 4000 5450 50  0001 C CNN
F 1 "GND" H 4005 5527 50  0000 C CNN
F 2 "" H 4000 5700 50  0001 C CNN
F 3 "" H 4000 5700 50  0001 C CNN
	1    4000 5700
	1    0    0    -1  
$EndComp
Wire Wire Line
	4000 5650 4000 5700
$Comp
L ampli_tres_simple-rescue:R-Device R1
U 1 1 5CFC40BB
P 2600 4700
F 0 "R1" H 2670 4746 50  0000 L CNN
F 1 "2.8k" H 2670 4655 50  0000 L CNN
F 2 "Resistor_SMD:R_0603_1608Metric_Pad1.05x0.95mm_HandSolder" V 2530 4700 50  0001 C CNN
F 3 "~" H 2600 4700 50  0001 C CNN
	1    2600 4700
	1    0    0    -1  
$EndComp
$Comp
L ampli_tres_simple-rescue:R-Device R2
U 1 1 5CFC4429
P 2600 5550
F 0 "R2" H 2670 5596 50  0000 L CNN
F 1 "1.8k" H 2670 5505 50  0000 L CNN
F 2 "Resistor_SMD:R_0402_1005Metric" V 2530 5550 50  0001 C CNN
F 3 "~" H 2600 5550 50  0001 C CNN
	1    2600 5550
	1    0    0    -1  
$EndComp
Wire Wire Line
	3700 5050 3300 5050
Connection ~ 2600 5050
$Comp
L ampli_tres_simple-rescue:GND-power #PWR0102
U 1 1 5CFC554A
P 2600 5800
F 0 "#PWR0102" H 2600 5550 50  0001 C CNN
F 1 "GND" H 2605 5627 50  0000 C CNN
F 2 "" H 2600 5800 50  0001 C CNN
F 3 "" H 2600 5800 50  0001 C CNN
	1    2600 5800
	1    0    0    -1  
$EndComp
Wire Wire Line
	2600 5700 2600 5800
$Comp
L ampli_tres_simple-rescue:C-Device Cb1
U 1 1 5CFC7E71
P 2050 5050
F 0 "Cb1" V 1798 5050 50  0000 C CNN
F 1 "10u" V 1889 5050 50  0000 C CNN
F 2 "Capacitor_Tantalum_SMD:CP_EIA-3216-10_Kemet-I_Pad1.58x1.35mm_HandSolder" H 2088 4900 50  0001 C CNN
F 3 "~" H 2050 5050 50  0001 C CNN
	1    2050 5050
	0    1    1    0   
$EndComp
Wire Wire Line
	2200 5050 2600 5050
Text GLabel 5100 4800 2    50   Input ~ 0
out
Wire Wire Line
	4000 5250 4000 5300
$Comp
L ampli_tres_simple-rescue:C-Device Ce1
U 1 1 5CFF0991
P 4400 5500
F 0 "Ce1" H 4515 5546 50  0000 L CNN
F 1 "10u" H 4515 5455 50  0000 L CNN
F 2 "Capacitor_Tantalum_SMD:CP_EIA-3216-10_Kemet-I_Pad1.58x1.35mm_HandSolder" H 4438 5350 50  0001 C CNN
F 3 "~" H 4400 5500 50  0001 C CNN
	1    4400 5500
	1    0    0    -1  
$EndComp
Wire Wire Line
	4400 5350 4400 5300
Wire Wire Line
	4400 5300 4000 5300
Connection ~ 4000 5300
Wire Wire Line
	4000 5300 4000 5350
$Comp
L ampli_tres_simple-rescue:C-Device Cc1
U 1 1 5CF920F7
P 4450 4800
F 0 "Cc1" V 4198 4800 50  0000 C CNN
F 1 "10u" V 4289 4800 50  0000 C CNN
F 2 "Capacitor_Tantalum_SMD:CP_EIA-3216-10_Kemet-I_Pad1.58x1.35mm_HandSolder" H 4488 4650 50  0001 C CNN
F 3 "~" H 4450 4800 50  0001 C CNN
	1    4450 4800
	0    1    1    0   
$EndComp
Wire Wire Line
	4300 4800 4000 4800
Connection ~ 4000 4800
Wire Wire Line
	4000 4800 4000 4850
Wire Wire Line
	4400 5650 4400 5700
Wire Wire Line
	4400 5700 4000 5700
Connection ~ 4000 5700
Wire Wire Line
	4600 4800 4950 4800
$Comp
L ampli_tres_simple-rescue:R-Device RL1
U 1 1 5CFA6508
P 4950 5050
F 0 "RL1" H 5020 5096 50  0000 L CNN
F 1 "1MEG" H 5020 5005 50  0000 L CNN
F 2 "Resistor_SMD:R_1206_3216Metric_Pad1.42x1.75mm_HandSolder" V 4880 5050 50  0001 C CNN
F 3 "~" H 4950 5050 50  0001 C CNN
	1    4950 5050
	1    0    0    -1  
$EndComp
Wire Wire Line
	4950 4900 4950 4800
Connection ~ 4950 4800
Wire Wire Line
	4950 4800 5100 4800
$Comp
L ampli_tres_simple-rescue:GND-power #PWR0103
U 1 1 5CFA6EBD
P 4950 5300
F 0 "#PWR0103" H 4950 5050 50  0001 C CNN
F 1 "GND" H 4955 5127 50  0000 C CNN
F 2 "" H 4950 5300 50  0001 C CNN
F 3 "" H 4950 5300 50  0001 C CNN
	1    4950 5300
	1    0    0    -1  
$EndComp
Wire Wire Line
	4950 5200 4950 5300
Text GLabel 3300 4900 1    50   Input ~ 0
Vb
Wire Wire Line
	3300 4900 3300 5050
Connection ~ 3300 5050
Wire Wire Line
	3300 5050 2600 5050
Wire Wire Line
	3750 5250 4000 5250
$Comp
L ampli_tres_simple-rescue:VCC-power #PWR0109
U 1 1 5D0446EC
P 3800 2550
F 0 "#PWR0109" H 3800 2400 50  0001 C CNN
F 1 "VCC" H 3818 2723 50  0000 C CNN
F 2 "" H 3800 2550 50  0001 C CNN
F 3 "" H 3800 2550 50  0001 C CNN
	1    3800 2550
	-1   0    0    1   
$EndComp
$Comp
L ampli_tres_simple-rescue:PWR_FLAG-power #FLG0102
U 1 1 5D043E30
P 3800 2200
F 0 "#FLG0102" H 3800 2275 50  0001 C CNN
F 1 "PWR_FLAG" H 3800 2373 50  0000 C CNN
F 2 "" H 3800 2200 50  0001 C CNN
F 3 "~" H 3800 2200 50  0001 C CNN
	1    3800 2200
	1    0    0    -1  
$EndComp
Wire Wire Line
	2750 2400 2750 2250
$Comp
L ampli_tres_simple-rescue:GND-power #PWR0107
U 1 1 5D02AAF0
P 2750 2400
F 0 "#PWR0107" H 2750 2150 50  0001 C CNN
F 1 "GND" H 2755 2227 50  0000 C CNN
F 2 "" H 2750 2400 50  0001 C CNN
F 3 "" H 2750 2400 50  0001 C CNN
	1    2750 2400
	1    0    0    -1  
$EndComp
$Comp
L ampli_tres_simple-rescue:PWR_FLAG-power #FLG0101
U 1 1 5D02934C
P 2750 2250
F 0 "#FLG0101" H 2750 2325 50  0001 C CNN
F 1 "PWR_FLAG" H 2750 2423 50  0000 C CNN
F 2 "" H 2750 2250 50  0001 C CNN
F 3 "~" H 2750 2250 50  0001 C CNN
	1    2750 2250
	1    0    0    -1  
$EndComp
Wire Wire Line
	3800 2550 3800 2200
Wire Wire Line
	3300 3900 4000 3900
Wire Wire Line
	2600 3900 3300 3900
Connection ~ 3300 3900
Wire Wire Line
	3300 3800 3300 3900
$Comp
L ampli_tres_simple-rescue:VCC-power #PWR0108
U 1 1 5D05B88A
P 3300 3800
F 0 "#PWR0108" H 3300 3650 50  0001 C CNN
F 1 "VCC" H 3317 3973 50  0000 C CNN
F 2 "" H 3300 3800 50  0001 C CNN
F 3 "" H 3300 3800 50  0001 C CNN
	1    3300 3800
	1    0    0    -1  
$EndComp
Text GLabel 1100 5050 0    50   Input ~ 0
in
Connection ~ 4000 5250
$Comp
L ampli_tres_simple-rescue:2N2219-Transistor_BJT Q1
U 1 1 5CFC1062
P 3900 5050
F 0 "Q1" H 4090 5096 50  0000 L CNN
F 1 "2N2219" H 4090 5005 50  0000 L CNN
F 2 "2n2219:2N2219" H 4100 4975 50  0001 L CIN
F 3 "http://www.onsemi.com/pub_link/Collateral/2N2219-D.PDF" H 3900 5050 50  0001 L CNN
F 4 "Q" H 3900 5050 50  0001 C CNN "Spice_Primitive"
F 5 "2N2219" H 3900 5050 50  0001 C CNN "Spice_Model"
F 6 "Y" H 3900 5050 50  0001 C CNN "Spice_Netlist_Enabled"
F 7 "2N2219.LIB" H 3900 5050 50  0001 C CNN "Spice_Lib_File"
F 8 "3 2 1" H 3900 5050 50  0001 C CNN "Spice_Node_Sequence"
	1    3900 5050
	1    0    0    -1  
$EndComp
Wire Wire Line
	2600 5250 2600 5400
Wire Wire Line
	2600 5050 2600 5250
Connection ~ 2600 5250
Wire Wire Line
	2500 5250 2600 5250
Text GLabel 2500 5250 0    50   Input ~ 0
VR2
Wire Wire Line
	2600 4900 2600 4850
Wire Wire Line
	2600 5050 2600 4900
Connection ~ 2600 4900
Wire Wire Line
	2400 4900 2600 4900
Text GLabel 2400 4900 0    50   Input ~ 0
VR1
Text GLabel 3750 5250 0    50   Input ~ 0
Ve
Wire Wire Line
	4000 4700 4000 4750
Wire Wire Line
	4000 4750 4000 4800
Connection ~ 4000 4750
Wire Wire Line
	3750 4750 4000 4750
Text GLabel 3750 4750 0    50   Input ~ 0
Vc
Wire Wire Line
	4000 3900 4000 4300
Wire Wire Line
	4000 4300 4000 4400
Connection ~ 4000 4300
Wire Wire Line
	3800 4300 4000 4300
Text GLabel 3800 4300 0    50   Input ~ 0
V3
Wire Wire Line
	2600 3900 2600 4350
Wire Wire Line
	2600 4350 2600 4550
Connection ~ 2600 4350
Wire Wire Line
	2350 4350 2600 4350
Text GLabel 2350 4350 0    50   Input ~ 0
V2
$Comp
L ampli_tres_simple-rescue:Screw_Terminal_01x02-Connector Supply_voltage1
U 1 1 5D0A2153
P 3250 3300
F 0 "Supply_voltage1" V 3122 3380 50  0000 L CNN
F 1 "Vcc_conn" V 3213 3380 50  0000 L CNN
F 2 "borniers:PRT-08084" H 3250 3300 50  0001 C CNN
F 3 "~" H 3250 3300 50  0001 C CNN
	1    3250 3300
	0    1    1    0   
$EndComp
$Comp
L ampli_tres_simple-rescue:GND-power #PWR0104
U 1 1 5D0A4096
P 2500 3000
F 0 "#PWR0104" H 2500 2750 50  0001 C CNN
F 1 "GND" H 2505 2827 50  0000 C CNN
F 2 "" H 2500 3000 50  0001 C CNN
F 3 "" H 2500 3000 50  0001 C CNN
	1    2500 3000
	1    0    0    -1  
$EndComp
Wire Wire Line
	2500 3000 2500 2850
Wire Wire Line
	2500 2850 3150 2850
Wire Wire Line
	3150 2850 3150 3100
$Comp
L ampli_tres_simple-rescue:VCC-power #PWR0105
U 1 1 5D0A5181
P 3250 2750
F 0 "#PWR0105" H 3250 2600 50  0001 C CNN
F 1 "VCC" H 3267 2923 50  0000 C CNN
F 2 "" H 3250 2750 50  0001 C CNN
F 3 "" H 3250 2750 50  0001 C CNN
	1    3250 2750
	1    0    0    -1  
$EndComp
Wire Wire Line
	3250 2750 3250 3100
Wire Wire Line
	1100 5050 1900 5050
$Comp
L ampli_tres_simple-rescue:Screw_Terminal_01x02-Connector Input_signal1
U 1 1 5D0A9436
P 1400 5600
F 0 "Input_signal1" V 1364 5412 50  0000 R CNN
F 1 "Vin_conn" V 1273 5412 50  0000 R CNN
F 2 "borniers:PRT-08084" H 1400 5600 50  0001 C CNN
F 3 "~" H 1400 5600 50  0001 C CNN
	1    1400 5600
	0    -1   -1   0   
$EndComp
$Comp
L ampli_tres_simple-rescue:GND-power #PWR0106
U 1 1 5D0AB79F
P 1950 6250
F 0 "#PWR0106" H 1950 6000 50  0001 C CNN
F 1 "GND" H 1955 6077 50  0000 C CNN
F 2 "" H 1950 6250 50  0001 C CNN
F 3 "" H 1950 6250 50  0001 C CNN
	1    1950 6250
	1    0    0    -1  
$EndComp
Wire Wire Line
	1950 6250 1950 6000
Wire Wire Line
	1950 6000 1500 6000
Wire Wire Line
	1500 6000 1500 5800
NoConn ~ 1400 6000
Wire Wire Line
	1400 6000 1400 5800
$Comp
L ampli_tres_simple-rescue:Screw_Terminal_01x02-Connector output_signal1
U 1 1 5D0B88EB
P 5450 4500
F 0 "output_signal1" H 5368 4175 50  0000 C CNN
F 1 "Vout" H 5368 4266 50  0000 C CNN
F 2 "borniers:PRT-08084" H 5450 4500 50  0001 C CNN
F 3 "~" H 5450 4500 50  0001 C CNN
	1    5450 4500
	-1   0    0    1   
$EndComp
$Comp
L ampli_tres_simple-rescue:GND-power #PWR0110
U 1 1 5D0BA588
P 5900 4350
F 0 "#PWR0110" H 5900 4100 50  0001 C CNN
F 1 "GND" H 5905 4177 50  0000 C CNN
F 2 "" H 5900 4350 50  0001 C CNN
F 3 "" H 5900 4350 50  0001 C CNN
	1    5900 4350
	-1   0    0    1   
$EndComp
Wire Wire Line
	5650 4400 5900 4400
Wire Wire Line
	5900 4400 5900 4350
NoConn ~ 5900 4500
Wire Wire Line
	5900 4500 5700 4500
Text GLabel 1200 5800 0    50   Input ~ 0
in
Wire Wire Line
	1200 5800 1400 5800
Connection ~ 1400 5800
Text GLabel 5700 4750 3    50   Output ~ 0
out
Wire Wire Line
	5700 4750 5700 4500
Connection ~ 5700 4500
Wire Wire Line
	5700 4500 5650 4500
$EndSCHEMATC
