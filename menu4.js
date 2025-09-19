// floating-menu.js
(function() {
    'use strict';
    
    // Configuration
    const config = {
        menuButtonPosition: 'left',
        menuButtonColor: '#2563eb',
        menuButtonHoverColor: '#1d4ed8',
        animationDuration: 300,
        categories: [
    {
        name: "Aksesoris Komputer & Laptop",
        href: "https://www.prinin.web.id",
        children: [
            {
                name: "Cables",
		href: "https://google.com",
                children: [
                    { name: "AUDIO Cables", href: "#audio-cables" },
                    { name: "BASEUS Cables" },
                    { name: "DP Cables" },
                    { name: "DVI Cables" },
                    { name: "HDMI Cables" },
                    { name: "Security Cables" },
                    { name: "USB Cables" },
                    { name: "VGA Cables" }
                ]
            },
            {
                name: "Converter",
                children: [
                    { name: "ATEN Converter" },
                    { name: "BAFO Converter" },
                    { name: "BASEUS Converter" },
                    { name: "BLACKMAGIC DESIGN Converter" },
                    { name: "DTECH Converter" },
                    { name: "MCDODO Converter" },
                    { name: "MTECH Converter" },
                    { name: "OEM Converter" },
                    { name: "ORICO Converter" },
                    { name: "TARGUS Converter" },
                    { name: "UGREEN Converter" },
                    { name: "UNITEK Converter" },
                    { name: "VCOM Converter" },
                    { name: "VERBATIM Converter" }
                ]
            },
            {
                name: "Cooling Pads",
                children: [
                    { name: "MURAGO Cooling Pads" }
                ]
            },
            {
                name: "Digitizer",
                children: [
                    { name: "HUION Digitizer" },
                    { name: "WACOM Digitizer" }
                ]
            },
            {
                name: "Disc",
                children: [
                    { name: "GT-PRO Disc" }
                ]
            },
            {
                name: "Kursi Gaming",
                children: [
                    { name: "FANTECH Kursi Gaming" },
                    { name: "ONEX Kursi Gaming" }
                ]
            },
            {
                name: "Laptop Bag / Case",
                children: [
                    { name: "ACER Laptop Bag / Case" },
                    { name: "DELL Laptop Bag / Case" },
                    { name: "HP Laptop Bag / Case" },
                    { name: "LENOVO Laptop Bag / Case" },
                    { name: "MICROSOFT Laptop Bag / Case" },
                    { name: "TARGUS Laptop Bag / Case" }
                ]
            },
            {
                name: "Signature Pad",
                children: [
                    { name: "TOPAZ Signature Pad" }
                ]
            },
            {
                name: "USB Hub",
                children: [
                    { name: "BASEUS USB Hub" },
                    { name: "ORICO USB Hub" },
                    { name: "PROLINK USB Hub" },
                    { name: "PX USB Hub" },
                    { name: "TARGUS USB Hub" },
                    { name: "UGREEN USB Hub" },
                    { name: "VERBATIM USB Hub" }
                ]
            },
            {
                name: "Web Camera",
                children: [
                    { name: "FANTECH Web Camera" },
                    { name: "INFORCE Web Camera" },
                    { name: "LOGITECH Web Camera" },
                    { name: "MAXHUB Web Camera" },
                    { name: "OBSBOT Web Camera" },
                    { name: "SPC Web Camera" },
                    { name: "X6 Web Camera" }
                ]
            }
        ]
    },
    {
        name: "Komponen Komputer",
        children: [
            {
                name: "Computer Case",
                children: [
                    { name: "CORSAIR Computer Case" },
                    { name: "DAZUMBA Computer Case" },
                    { name: "SHARKOON Computer Case" },
                    { name: "SIMBADDA Computer Case" },
                    { name: "VENOMRX Computer Case" }
                ]
            },
            {
                name: "Computer Power Supply",
                children: [
                    { name: "DELL Power Supply" },
                    { name: "FSP Power Supply" },
                    { name: "SIMBADDA Power Supply" }
                ]
            },
            {
                name: "Keyboard",
                children: [
                    { name: "ALCATROZ Keyboard" },
                    { name: "AOC Keyboard" },
                    { name: "APPLE Keyboard" },
                    { name: "ARMAGGEDDON Keyboard" },
                    { name: "ASUS Keyboard" },
                    { name: "AULA Keyboard" },
                    { name: "Dell Keyboard" },
                    { name: "FANTECH Keyboard" },
                    { name: "HAVIT Keyboard" },
                    { name: "HP Keyboard" },
                    { name: "IMPERION Keyboard" },
                    { name: "INFORCE Keyboard" },
                    { name: "LENOVO Keyboard" },
                    { name: "LOGITECH Keyboard" },
                    { name: "M-TECH Keyboard" },
                    { name: "MICROSOFT Keyboard" },
                    { name: "OEM Keyboard" },
                    { name: "PROLINK Keyboard" },
                    { name: "RAPOO Keyboard" },
                    { name: "RAZER Keyboard" },
                    { name: "REDDRAGON Keyboard" },
                    { name: "REXUS Keyboard" },
                    { name: "SPC Keyboard" },
                    { name: "TARGUS Keyboard" },
                    { name: "TOSHIBA Keyboard" },
                    { name: "ZYREX Keyboard" }
                ]
            },
            {
                name: "Laptop Battery",
                children: [
                    { name: "DELL Laptop Battery" }
                ]
            },
            {
                name: "LCD Laptop",
                children: [
                    { name: "ASUS LCD Laptop" }
                ]
            },
            {
                name: "Memory",
                children: [
                    { name: "APACER Memory" },
                    { name: "CISCO Memory" },
                    { name: "CORSAIR Memory" },
                    { name: "DELL Memory" },
                    { name: "HP Memory" },
                    { name: "HUAWEI Memory" },
                    { name: "IBM Memory" },
                    { name: "KINGSTON Memory" },
                    { name: "LENOVO Memory" },
                    { name: "NUTANIX Memory" },
                    { name: "SYNOLOGY Memory" },
                    { name: "V-GEN Memory" }
                ]
            },
            {
                name: "Monitor",
                children: [
                    { name: "ACER Monitor" },
                    { name: "AOC Monitor" },
                    { name: "ASUS Monitor" },
                    { name: "BENQ Monitor" },
                    { name: "DELL Monitor" },
                    { name: "HIKVISION Monitor" },
                    { name: "HP Monitor" },
                    { name: "LENOVO Monitor" },
                    { name: "LG Monitor" },
                    { name: "MSI Monitor" },
                    { name: "PHILIPS Monitor" },
                    { name: "PRIMATECH Monitor" },
                    { name: "REVILLO Monitor" },
                    { name: "SAMSUNG Monitor" },
                    { name: "SPC Monitor" },
                    { name: "VIEWSONIC Monitor" },
                    { name: "WEARNES Monitor" },
                    { name: "ZYREX Monitor" }
                ]
            },
            {
                name: "Motherboard",
                children: [
                    { name: "ASUS Motherboard" },
                    { name: "ECS Motherboard" },
                    { name: "GIGABYTE Motherboard" }
                ]
            },
            {
                name: "Mouse",
                children: [
                    {
                        name: "Bluetooth Mouse",
                        children: [
                            { name: "ALCATROZ Bluetooth Mouse" },
                            { name: "DYNABOOK Bluetooth Mouse" },
                            { name: "FANTECH Bluetooth Mouse" },
                            { name: "HP Bluetooth Mouse" },
                            { name: "LOGITECH Bluetooth Mouse" },
                            { name: "PROLINK Bluetooth Mouse" }
                        ]
                    },
                    {
                        name: "Wired Mouse",
                        children: [
                            { name: "ALCATROZ Mouse" },
                            { name: "AOC Mouse" },
                            { name: "APPLE Mouse" },
                            { name: "ARMAGGEDDON Mouse" },
                            { name: "ASUS Mouse" },
                            { name: "AULA Mouse" },
                            { name: "DELL Mouse" },
                            { name: "E-BLUE Mouse" },
                            { name: "FANTECH Mouse" },
                            { name: "HAVIT Mouse" },
                            { name: "HP Mouse" },
                            { name: "IMPERION Mouse" },
                            { name: "LOGITECH Mouse" },
                            { name: "MICROPACK Mouse" },
                            { name: "PROLINK Mouse" },
                            { name: "RAPOO Mouse" },
                            { name: "RAZER Mouse" },
                            { name: "REDRAGON Mouse" },
                            { name: "REXUS Mouse" },
                            { name: "ROBOT Mouse" },
                            { name: "TOSHIBA Mouse" },
                            { name: "ZYREX Mouse" }
                        ]
                    },
                    {
                        name: "Wireless Mouse",
                        children: [
                            { name: "ALCATROZ Wireless Mouse" },
                            { name: "ARMAGGEDDON Wireless Mouse" },
                            { name: "BASEUS Wireless Mouse" },
                            { name: "DELL Wireless Mouse" },
                            { name: "FANTECH Wireless Mouse" },
                            { name: "HAVIT Wireless Mouse" },
                            { name: "HP Wireless Mouse" },
                            { name: "IMPERION Wireless Mouse" },
                            { name: "LOGITECH Wireless Mouse" },
                            { name: "MICROPACK Wireless Mouse" },
                            { name: "PROLINK Wireless Mouse" },
                            { name: "RAPOO Wireless Mouse" },
                            { name: "RAZER Wireless Mouse" },
                            { name: "REDRAGON Wireless Mouse" },
                            { name: "ROBOT Wireless Mouse" },
                            { name: "TARGUS Wireless Mouse" },
                            { name: "TOSHIBA Wireless Mouse" }
                        ]
                    }
                ]
            },
            {
                name: "Optical Drive",
                children: [
                    { name: "ASUS Optical Drive" },
                    { name: "LG Optical Drive" }
                ]
            },
            {
                name: "PCI Card",
                children: [
                    { name: "NETIS PCI Card" }
                ]
            },
            {
                name: "Processors",
                children: [
                    { name: "AMD Processors" },
                    { name: "INTEL Processors" }
                ]
            },
            {
                name: "Stabilizer",
                children: [
                    { name: "DELTA Stabilizer" },
                    { name: "EMMERICH Stabilizer" },
                    { name: "FIRMAN Stabilizer" },
                    { name: "ICA Stabilizer" },
                    { name: "KENIKA Stabilizer" },
                    { name: "LEXOS Stabilizer" },
                    { name: "MAKELSAN Stabilizer" },
                    { name: "MINAMOTO Stabilizer" },
                    { name: "PRIMATECH Stabilizer" },
                    { name: "PROLINK Stabilizer" }
                ]
            },
            {
                name: "UPS",
                children: [
                    { name: "ABB UPS" },
                    { name: "ACERALTOS UPS" },
                    { name: "APC UPS" },
                    { name: "DELL UPS" },
                    { name: "DELTA UPS" },
                    { name: "EATON UPS" },
                    { name: "EDCON UPS" },
                    { name: "EMMERICH UPS" },
                    { name: "FSP UPS" },
                    { name: "GTEC UPS" },
                    { name: "HP UPS" },
                    { name: "ICA UPS" },
                    { name: "INFORCE UPS" },
                    { name: "KSTAR UPS" },
                    { name: "LAPLACE UPS" },
                    { name: "LEGRAND UPS" },
                    { name: "LEXOS UPS" },
                    { name: "MAKELSAN UPS" },
                    { name: "PROLINK UPS" },
                    { name: "SOCOMEC UPS" },
                    { name: "VERTIV UPS" },
                    { name: "WEARNES UPS" }
                ]
            },
            {
                name: "UPS Battery",
                children: [
                    { name: "APC UPS Battery" },
                    { name: "EATON UPS Battery" },
                    { name: "PANASONIC UPS Battery" },
                    { name: "PROLINK UPS Battery" }
                ]
            },
            {
                name: "VGA Card",
                children: [
                    { name: "EAGLE VGA Cards" },
                    { name: "GIGABYTE VGA Cards" },
                    { name: "LEADTEK VGA Cards" },
                    { name: "MSI VGA Cards" }
                ]
            }
        ]
    },
    {
        name: "Komputer & Laptop",
        children: [
            {
                name: "Desktop PC",
                children: [
                    { name: "ACER PC / ACER Desktop PC" },
                    { name: "ASUS PC / ASUS Desktop PC" },
                    { name: "AXIOO PC / AXIOO Desktop PC" },
                    { name: "DELL PC / DELL Desktop PC" },
                    { name: "HP PC / HP Desktop PC" },
                    { name: "INTEL PC / INTEL Desktop PC" },
                    { name: "LENOVO PC / LENOVO Desktop PC" }
                ]
            },
            {
                name: "Laptop Gaming",
                children: [
                    { name: "ACER Laptop Gaming" },
                    { name: "ASUS Laptop Gaming" },
                    { name: "AXIOO Laptop Gaming" },
                    { name: "DELL Laptop Gaming" },
                    { name: "HP Laptop Gaming" },
                    { name: "LENOVO Laptop Gaming" },
                    { name: "MSI Laptop Gaming" }
                ]
            },
            {
                name: "Notebook",
                children: [
                    { name: "ADVAN Laptop" },
                    { name: "DELL Laptop" },
                    { name: "Laptop ACER" },
                    { name: "Laptop ASUS" },
                    { name: "Laptop AXIOO" },
                    { name: "Laptop HP" },
                    { name: "Laptop LENOVO" },
                    { name: "Laptop ZOAN" },
                    { name: "Laptop ZYREX" },
                    { name: "MSI Laptop" }
                ]
            },
            {
                name: "PAKET Desktop & Laptop",
                children: [
                    {
                        name: "Juknis DAK TIK 2024",
                        children: [
                            { name: "Juknis DAK TIK ACER 2024" },
                            { name: "Juknis DAK TIK AXIOO 2024" },
                            { name: "Juknis DAK TIK EVERCOSS 2024" },
                            { name: "Juknis DAK TIK ZYREX 2024" }
                        ]
                    },
                    {
                        name: "Paket DAK TIK 2024",
                        children: [
                            { name: "Paket DAK TIK ACER 2024" },
                            { name: "Paket DAK TIK AXIOO 2024" },
                            { name: "Paket DAK TIK EVERCOSS 2024" },
                            { name: "Paket DAK TIK ZYREX 2024" }
                        ]
                    },
                    { name: "Paket IT" }
                ]
            },
            {
                name: "PC Gaming",
                children: [
                    { name: "ACER PC / ACER PC Gaming" },
                    { name: "ASUS PC Gaming" },
                    { name: "LENOVO PC Gaming" }
                ]
            },
            {
                name: "PC Workstation",
                children: [
                    { name: "ASUS PC Workstation" },
                    { name: "DELL PC Workstation" }
                ]
            },
            {
                name: "Server",
                children: [
                    {
                        name: "Blade Server",
                        children: [
                            { name: "CISCO Blade Server" },
                            { name: "DELL Blade Server" },
                            { name: "FUJITSU Blade Server" },
                            { name: "HPE Blade Server" },
                            { name: "HUAWEI Blade Server" },
                            { name: "LENOVO Blade Server" }
                        ]
                    },
                    {
                        name: "Rack Server",
                        children: [
                            { name: "ACER Rack Server" },
                            { name: "AP Rack Server" },
                            { name: "ASUS Rack Server" },
                            { name: "CISCO Rack Server" },
                            { name: "DELL Rack Server" },
                            { name: "FUJITSU Rack Server" },
                            { name: "HPE Rack Server" },
                            { name: "HUAWEI Rack Server" },
                            { name: "INTEL Rack Server" },
                            { name: "LENOVO Rack Server" },
                            { name: "NUTANIX Rack Server" },
                            { name: "RAINER Rack Server" },
                            { name: "REVILLO Rack Server" },
                            { name: "SUPERMICRO Rack Server" },
                            { name: "WEARNES Rack Server" },
                            { name: "ZYREX Rack Server" }
                        ]
                    },
                    {
                        name: "Server Licensi",
                        children: [
                            { name: "CISCO Server Licensi" }
                        ]
                    },
                    {
                        name: "Tower Server",
                        children: [
                            { name: "ACER Tower Server" },
                            { name: "AP Tower Server" },
                            { name: "ASUS Tower Server" },
                            { name: "AXIOO Tower Server" },
                            { name: "DELL Tower Server" },
                            { name: "FUJITSU Tower Server" },
                            { name: "GEAR Tower Server" },
                            { name: "HPE Tower Server" },
                            { name: "INTEL Tower Server" },
                            { name: "LENOVO Tower Server" },
                            { name: "RAINER Tower Server" },
                            { name: "RELION Tower Server" },
                            { name: "REVILLO Tower Server" },
                            { name: "WEARNES Tower Server" },
                            { name: "ZYREX Tower Server" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Networking",
        children: [
            {
                name: "Cable",
                children: [
                    { name: "ATEN Cable" },
                    { name: "BELDEN Cable" },
                    { name: "COMMSCOPE Cable" },
                    { name: "D-LINK Cable" },
                    { name: "DTC Cable" },
                    { name: "GSB Cable" },
                    { name: "LS Cable" },
                    { name: "NETVIEL Cable" },
                    { name: "NYK Cable" },
                    { name: "OEM Cable" },
                    { name: "PROLINK Cable" },
                    { name: "SUPREME Cable" },
                    { name: "TRM Cable" },
                    { name: "VOKSEL Cable" }
                ]
            },
            {
                name: "Connector",
                children: [
                    { name: "BAFO Connector" },
                    { name: "BELDEN Connector" },
                    { name: "COMMSCOPE Connector" },
                    { name: "LS CABLE Connector" },
                    { name: "NYK Connector" },
                    { name: "OEM Connector" },
                    { name: "SUNBIO Connector" },
                    { name: "VASCOLINK Connector" }
                ]
            },
            {
                name: "Fiber Optics Tools",
                children: [
                    { name: "SUPERFIBER Fiber Optics Tools" }
                ]
            },
            {
                name: "KVM Switches and Options",
                children: [
                    { name: "APC KVM Switches and Options" },
                    { name: "ATEN KVM Switches and Options" },
                    { name: "AUSTIN HUGHES KVM Switches and Options" },
                    { name: "D-LINK KVM Switches and Options" },
                    { name: "KINAN KVM Switches and Options" }
                ]
            },
            {
                name: "Media Converter",
                children: [
                    { name: "D-LINK Media Converter" },
                    { name: "PX Media Converter" },
                    { name: "TP-LINK Media Converter" }
                ]
            },
            {
                name: "Modem",
                children: [
                    {
                        name: "Modem GSM",
                        children: [
                            { name: "ADVAN Modem GSM" },
                            { name: "D-LINK Modem GSM" },
                            { name: "HUAWEI Modem GSM" },
                            { name: "NETGEAR Modem GSM" },
                            { name: "PROLINK Modem GSM" },
                            { name: "SPEEDUP Modem GSM" },
                            { name: "TP-LINK Modem GSM" },
                            { name: "XL Modem GSM" }
                        ]
                    }
                ]
            },
            {
                name: "Networking Accessories",
                children: [
                    { name: "AMP Networking Accessories" },
                    { name: "APC Networking Accessories" },
                    { name: "BELDEN Networking Accessories" },
                    { name: "CISCO Networking Accessories" },
                    { name: "COMMSCOPE Networking Accessories" },
                    { name: "D-LINK Networking Accessories" },
                    { name: "FOX Network Accessories" },
                    { name: "GOLDTOOL Networking Accessories" },
                    { name: "HPE Networking Accessories" },
                    { name: "HYPERLINK Networking Accessories" },
                    { name: "IOT Networking Accessories" },
                    { name: "KENBOTONG Networking Accessories" },
                    { name: "LENOVO Networking Accessories" },
                    { name: "LINKSYS Networking Accessories" },
                    { name: "LS CABLE Networking Accessories" },
                    { name: "NETGEAR Networking Accessories" },
                    { name: "PANDUIT Networking Accessories" },
                    { name: "PROLINK Networking Accessories" },
                    { name: "RKS Networking Accessories" },
                    { name: "RUCKUS Networking Accessories" },
                    { name: "RUIJIE Networking Accessories" },
                    { name: "SCHNEIDER Networking Accessories" },
                    { name: "SYNOLOGY Networking Accessories" },
                    { name: "TALON Networking Accessories" },
                    { name: "TENDA Networking Accessories" },
                    { name: "TP-LINK Networking Accessories" },
                    { name: "TRENDNET Networking Accessories" },
                    { name: "UBIQUITI Networking Accessories" },
                    { name: "VOLKTEK Networking Accessories" }
                ]
            },
            {
                name: "Networking Security",
                children: [
                    { name: "ARCHANGEL Networking Security" },
                    { name: "CISCO Networking Security" },
                    { name: "FORTINET Networking Security" },
                    { name: "JUNIPER Networking Security" },
                    { name: "RUIJIE Networking Security" },
                    { name: "SANGFOR Networking Security" },
                    { name: "SOPHOS Networking Security" }
                ]
            },
            {
                name: "Rack System and Option",
                children: [
                    { name: "ABBA Rack System and Option" },
                    { name: "APC Rack System and Option" },
                    { name: "BELDEN Rack System and Option" },
                    { name: "CISCOM Rack System and Option" },
                    { name: "COMMSCOPE Rack System and Option" },
                    { name: "DELL Rack System and Option" },
                    { name: "FORTUNA Rack System and Option" },
                    { name: "HAGANERACK Rack System and Option" },
                    { name: "HP Rack System and Option" },
                    { name: "HUAWEI Rack System and Option" },
                    { name: "INDORACK Rack System and Option" },
                    { name: "IOT Rack System and Option" },
                    { name: "LENOVO Rack System and Option" },
                    { name: "QNAP Rack System and Option" },
                    { name: "VERTIV Rack System and Option" }
                ]
            },
            {
                name: "Router",
                children: [
                    { name: "BARRACUDA Router" },
                    { name: "CISCO Router" },
                    { name: "D-LINK Router" },
                    { name: "HPE Router" },
                    { name: "HUAWEI Router" },
                    { name: "HUAWEI Routerboard" },
                    { name: "LINKSYS Router" },
                    { name: "MIKROTIK Routerboard" },
                    { name: "TENDA Router" },
                    { name: "TP-LINK Router" },
                    { name: "UBIQUITI Router" }
                ]
            },
            {
                name: "Software Office Productivity Licencing",
                children: [
                    { name: "Microsoft Software Office Productivity Licencing" }
                ]
            },
            {
                name: "Switches",
                children: [
                    {
                        name: "Managed Switches",
                        children: [
                            { name: "ALCATEL LUCENT Managed Switches" },
                            { name: "ALLIED TELESIS Managed Switches" },
                            { name: "CISCO Managed Switches" },
                            { name: "D-LINK Managed Switches" },
                            { name: "DELL Managed Switches" },
                            { name: "EDGECORE Managed Switches" },
                            { name: "H3C Managed Switches" },
                            { name: "HPE Managed Switches" },
                            { name: "HUAWEI Managed Switches" },
                            { name: "JUNIPER Managed Switches" },
                            { name: "LINKSYS Managed Switches" },
                            { name: "MIKROTIK Managed Switches" },
                            { name: "NETGEAR Managed Switches" },
                            { name: "PROLINK Managed Switches" },
                            { name: "RUIJIE Managed Switches" },
                            { name: "TP-LINK Managed Switches" },
                            { name: "TRM Managed Switches" },
                            { name: "UBIQUITI Managed Switches" },
                            { name: "VOLKTEK Managed Switches" }
                        ]
                    },
                    {
                        name: "Smart Switches",
                        children: [
                            { name: "ALCATEL LUCENT Smart Switches" },
                            { name: "CISCO Smart Switches" },
                            { name: "D-LINK Smart Switches" },
                            { name: "DELL Smart Switches" },
                            { name: "EDGECORE Smart Switches" },
                            { name: "LINKSYS Smart Switches" },
                            { name: "MIKROTIK Smart Switches" },
                            { name: "NETGEAR Smart Switches" },
                            { name: "TP-LINK Smart Switches" },
                            { name: "TRENDNET Smart Switches" }
                        ]
                    },
                    {
                        name: "Switch Modules & Accessories",
                        children: [
                            { name: "CISCO Switch Modules & Accessories" },
                            { name: "EDGECORE Switch Modules & Accessories" },
                            { name: "HP Switch Modules & Accessories" },
                            { name: "HUAWEI Switch Modules & Accessories" },
                            { name: "LINKSYS Switch Modules & Accessories" },
                            { name: "MIKROTIK Switch Modules & Accessories" },
                            { name: "NETGEAR Switch Modules & Accessories" },
                            { name: "UBIQUITI Switch Modules & Accessories" },
                            { name: "VOLKTEK Switch Modules & Accessories" }
                        ]
                    },
                    {
                        name: "Switch RPS",
                        children: [
                            { name: "HP Switch RPS" }
                        ]
                    },
                    {
                        name: "Unmanaged Switches",
                        children: [
                            { name: "ALLIED TELESIS Unmanaged Switches" },
                            { name: "CISCO Unmanaged Switches" },
                            { name: "D-LINK Unmanaged Switches" },
                            { name: "HIKVISION Unmanaged Switches" },
                            { name: "HP Unmanaged Switches" },
                            { name: "HUAWEI Unmanaged Switches" },
                            { name: "LINKSYS Unmanaged Switches" },
                            { name: "MILESIGHT Unmanaged Switches" },
                            { name: "NETGEAR Unmanaged Switches" },
                            { name: "NETIS Unmanaged Switches" },
                            { name: "PROLINK Unmanaged Switches" },
                            { name: "TENDA Unmanaged Switches" },
                            { name: "TOTOLINK Unmanaged Switches" },
                            { name: "TP-LINK Unmanaged Switches" },
                            { name: "TRM Unmanaged Switches" },
                            { name: "VOLKTEK Unmanaged Switches" }
                        ]
                    }
                ]
            },
            {
                name: "Wireless Access Points",
                children: [
                    { name: "ALCATEL LUCENT Wireless Access Points" },
                    { name: "CISCO Wireless Access Points" },
                    { name: "D-LINK Wireless Access Points" },
                    { name: "DOWTEL Wireless Access Points" },
                    { name: "HPE Wireless Access Points" },
                    { name: "HUAWEI Wireless Access Points" },
                    { name: "LINKSYS Wireless Access Points" },
                    { name: "NETGEAR Wireless Access Points" },
                    { name: "NETIS Wireless Access Points" },
                    { name: "PROLINK Wireless Access Points" },
                    { name: "RUCKUS Wireless Access Points" },
                    { name: "RUIJIE Wireless Access Points" },
                    { name: "SOPHOS Wireless Access Points" },
                    { name: "TENDA Wireless Access Points" },
                    { name: "TOTOLINK Wireless Access Points" },
                    { name: "TP-LINK Wireless Access Points" },
                    { name: "TRENDnet Wireless Access Points" },
                    { name: "Ubiquiti Wireless Access Points" }
                ]
            },
            {
                name: "Wireless Internet Routers",
                children: [
                    { name: "ASUS Wireless Internet Routers" },
                    { name: "D-LINK Wireless Internet Routers" },
                    { name: "HPE Wireless Internet Routers" },
                    { name: "LINKSYS Wireless Internet Routers" },
                    { name: "NETGEAR Wireless Internet Routers" },
                    { name: "NETIS Wireless Internet Routers" },
                    { name: "OEM Wireless Internet Routers" },
                    { name: "PROLINK Wireless Internet Routers" },
                    { name: "TENDA Wireless Internet Routers" },
                    { name: "TP-LINK Wireless Internet Routers" },
                    { name: "URSALINK Wireless Internet Routers" },
                    { name: "XIAOMI Wireless Internet Routers" }
                ]
            },
            {
                name: "Wireless LAN",
                children: [
                    { name: "D-LINK Wireless LAN" },
                    { name: "HP Wireless LAN" },
                    { name: "LENOVO Wireless LAN" },
                    { name: "NETIS Wireless LAN" },
                    { name: "PROLINK Wireless LAN" },
                    { name: "SYNOLOGY Wireless LAN" },
                    { name: "TP-LINK Wireless LAN" }
                ]
            }
        ]
    },
    {
        name: "Office Products",
        children: [
            {
                name: "Brankas",
                children: [
                    { name: "DATAFILE Brankas" }
                ]
            },
            {
                name: "Facsimile",
                children: [
                    { name: "BROTHER Facsimile" },
                    { name: "PANASONIC Facsimile" }
                ]
            },
            {
                name: "Handy Talky",
                children: [
                    { name: "MOTOROLA Handy Talky" }
                ]
            },
            {
                name: "Mesin Perkantoran",
                children: [
                    {
                        name: "Access Control",
                        children: [
                            { name: "FINGERSPOT Access Control" },
                            { name: "PANASONIC Access Control" },
                            { name: "SOLUTION Access Control" }
                        ]
                    },
                    {
                        name: "Control System",
                        children: [
                            { name: "Cue Control System" }
                        ]
                    },
                    {
                        name: "Mesin Absensi",
                        children: [
                            { name: "ABAKA Mesin Absensi" },
                            { name: "AIO Mesin Absensi" },
                            { name: "ANVIZ Mesin Absensi" },
                            { name: "BIOFINGER Mesin Absensi" },
                            { name: "BIOGEN Mesin Absensi" },
                            { name: "CP PLUS Mesin Absensi" },
                            { name: "FINGERPLUS Mesin Absensi" },
                            { name: "FINGERSPOT Mesin Absensi" },
                            { name: "HANDKEY Mesin Absensi" },
                            { name: "HIKVISION Mesin Absensi" },
                            { name: "HUNDURE Mesin Absensi" },
                            { name: "IGUARD Mesin Absensi" },
                            { name: "INTERACTIVE Mesin Absensi" },
                            { name: "IXHA Mesin Absensi" },
                            { name: "MUGEN Mesin Absensi" },
                            { name: "NEWMARK Mesin Absensi" },
                            { name: "ONESIA Mesin Absensi" },
                            { name: "PRIMATECH Mesin Absensi" },
                            { name: "SECURE Mesin Absensi" },
                            { name: "SOLUTION Mesin Absensi" },
                            { name: "SPC Mesin Absensi" }
                        ]
                    },
                    {
                        name: "Mesin Fotocopy",
                        children: [
                            { name: "CANON Mesin Fotocopy" },
                            { name: "FUJI XEROX Mesin Fotocopy" },
                            { name: "GESTETNER Mesin Fotocopy" },
                            { name: "KYOCERA Mesin Fotocopy" },
                            { name: "TOSHIBA Mesin Fotocopy" }
                        ]
                    },
                    {
                        name: "Mesin Jilid",
                        children: [
                            { name: "NEWMARK Mesin Jilid" },
                            { name: "SECURE Mesin Jilid" }
                        ]
                    },
                    {
                        name: "Mesin Ketik",
                        children: [
                            { name: "NAKAJIMA Mesin Ketik" }
                        ]
                    },
                    {
                        name: "Mesin Laminating",
                        children: [
                            { name: "LEITZ Mesin Laminating" },
                            { name: "NEWMARK Mesin Laminating" },
                            { name: "SECURE Mesin Laminating" }
                        ]
                    },
                    {
                        name: "Mesin Pemotong Kertas",
                        children: [
                            { name: "CARL Mesin Pemotong Kertas" },
                            { name: "HSM Mesin Pemotong Kertas" },
                            { name: "IDEAL Mesin Pemotong Kertas" }
                        ]
                    },
                    {
                        name: "Mesin Penghancur Kertas",
                        children: [
                            { name: "DAHLE Mesin Penghancur Kertas" },
                            { name: "EBA Mesin Penghancur Kertas" },
                            { name: "GEMET Mesin Penghancur Kertas" },
                            { name: "GOWELL Mesin Penghancur Kertas" },
                            { name: "HSM Mesin Penghancur Kertas" },
                            { name: "IDEAL Mesin Penghancur Kertas" },
                            { name: "INTIMUS Mesin Penghancur Kertas" },
                            { name: "NEWMARK Mesin Penghancur Kertas" },
                            { name: "PRIMATECH Mesin Penghancur Kertas" },
                            { name: "SECURE Mesin Penghancur Kertas" }
                        ]
                    },
                    {
                        name: "Mesin Penghitung Uang",
                        children: [
                            { name: "NCL Mesin Penghitung Uang" },
                            { name: "NEWMARK Mesin Penghitung Uang" },
                            { name: "PRIMATECH Mesin Penghitung Uang" },
                            { name: "SECURE Mesin Penghitung Uang" }
                        ]
                    },
                    {
                        name: "Pendukung Presentasi",
                        children: [
                            {
                                name: "Aksesoris Pendukung Presentasi",
                                children: [
                                    { name: "ATEN Aksesoris Pendukung Presentasi" },
                                    { name: "BASEUS Aksesoris Pendukung Presentasi" },
                                    { name: "BELYST Aksesoris Pendukung Presentasi" },
                                    { name: "BENQ Aksesoris Pendukung Presentasi" },
                                    { name: "BERVIN Aksesoris Pendukung Presentasi" },
                                    { name: "DTECH Aksesoris Pendukung Presentasi" },
                                    { name: "EPSON Aksesoris Pendukung Presentasi" },
                                    { name: "HERMECURY Aksesoris Pendukung Presentasi" },
                                    { name: "KRAMER Aksesoris Pendukung Presentasi" },
                                    { name: "LOGITECH Aksesoris Pendukung Presentasi" },
                                    { name: "NEC Aksesoris Pendukung Presentasi" },
                                    { name: "PANASONIC Aksesoris Pendukung Presentasi" },
                                    { name: "PROLINK Aksesoris Pendukung Presentasi" },
                                    { name: "TARGUS Aksesoris Pendukung Presentasi" },
                                    { name: "VCOM Aksesoris Pendukung Presentasi" },
                                    { name: "WEPRESENT Aksesoris Pendukung Presentasi" }
                                ]
                            },
                            {
                                name: "Copyboards",
                                children: [
                                    { name: "ITBOARD Copyboards" },
                                    { name: "PLUS Copyboards" },
                                    { name: "SMART Copyboards" }
                                ]
                            },
                            {
                                name: "Interactive Pen",
                                children: [
                                    { name: "AVER Interactive Pen" }
                                ]
                            },
                            {
                                name: "Interactive Touch Display",
                                children: [
                                    { name: "ADTESU Interactive Touch Display" },
                                    { name: "Aksesoris Interactive Touch Display" },
                                    { name: "AOC Interactive Touch Display" },
                                    { name: "ASCREEN Interactive Touch Display" },
                                    { name: "BELYST Interactive Touch Display" },
                                    { name: "BENQ Interactive Touch Display" },
                                    { name: "CYBERNETYX Interactive Touch Display" },
                                    { name: "DIGILIGHT Interactive Touch Display" },
                                    { name: "GTC Interactive Touch Display" },
                                    { name: "HIKVISION Interactive Touch Display" },
                                    { name: "HORION Interactive Touch Display" },
                                    { name: "HUAWEI Interactive Touch Display" },
                                    { name: "ICE BOARD Interactive Touch Display" },
                                    { name: "INFOCUS Interactive Touch Display" },
                                    { name: "IQBOARD Interactive Touch Display" },
                                    { name: "IQTOUCH Interactive Touch Display" },
                                    { name: "LG Interactive Touch Display" },
                                    { name: "LIBERA Interactive Touch Display" },
                                    { name: "MAXHUB Interactive Touch Display" },
                                    { name: "NEAT Interactive Touch Display" },
                                    { name: "NEWLINE Interactive Touch Display" },
                                    { name: "PRIMATECH Interactive Touch Display" },
                                    { name: "PROLIGHT Interactive Touch Display" },
                                    { name: "PROMETHEAN Interactive Touch Display" },
                                    { name: "SAMSUNG Interactive Touch Display" },
                                    { name: "SMART Interactive Touch Display" },
                                    { name: "SPC Interactive Touch Display" },
                                    { name: "TLI Interactive Touch Display" },
                                    { name: "UAPIC Interactive Touch Display" },
                                    { name: "VIEWSONIC Interactive Touch Display" },
                                    { name: "XOCECO Interactive Touch Display" }
                                ]
                            },
                            {
                                name: "Projector Bag / Case",
                                children: [
                                    { name: "BENQ Projector Bag / Case" },
                                    { name: "HITACHI Projector Bag / Case" },
                                    { name: "INFOCUS Projector Bag / Case" },
                                    { name: "VIEWSONIC Projector Bag / Case" }
                                ]
                            },
                            {
                                name: "Projector Brackets",
                                children: [
                                    { name: "BRITE Projector Brackets" },
                                    { name: "CENTROO Projector Brackets" },
                                    { name: "FOCUS Projector Brackets" },
                                    { name: "HQ Projector Brackets" },
                                    { name: "MICROVISION Projector Brackets" },
                                    { name: "PIXELSCREEN Projector Brackets" }
                                ]
                            },
                            {
                                name: "Projector Screen",
                                children: [
                                    { name: "ACTUAL Projector Screen" },
                                    { name: "BRITE Projector Screen" },
                                    { name: "D-LIGHT Projector Screen" },
                                    { name: "DATALITE Projector Screen" },
                                    { name: "DIGILIGHT Projector Screen" },
                                    { name: "DIGITALSCREEN Projector Screen" },
                                    { name: "DRAPER Projector Screen" },
                                    { name: "G-LITE Projector Screen" },
                                    { name: "IBRIGHT Projector Screen" },
                                    { name: "INFORCE Projector Screen" },
                                    { name: "JK Projector Screen" },
                                    { name: "MICROVISION Projector Screen" },
                                    { name: "MYSCREEN Projector Screen" },
                                    { name: "OEM Projector Screen" },
                                    { name: "PERFECTO Projector Screen" },
                                    { name: "SCREENVIEW Projector Screen" },
                                    { name: "WORLD Projector Screen" }
                                ]
                            },
                            {
                                name: "Projectors",
                                children: [
                                    { name: "ACER Projector" },
                                    { name: "ASK PROXIMA Projector" },
                                    { name: "ASUS Projector" },
                                    { name: "BENQ Projector" },
                                    { name: "BOXLIGHT MIMIO Projector" },
                                    { name: "CANON Projector" },
                                    { name: "CASIO Projector" },
                                    { name: "DELL Projector" },
                                    { name: "EIKI Projector" },
                                    { name: "EPSON Projector" },
                                    { name: "HITACHI Projector" },
                                    { name: "INFOCUS Projector" },
                                    { name: "LG Projector" },
                                    { name: "MAXELL Projector" },
                                    { name: "MICROVISION Projector" },
                                    { name: "NEC Projector" },
                                    { name: "OPTOMA Projector" },
                                    { name: "PANASONIC Projector" },
                                    { name: "PHILIPS Projector" },
                                    { name: "PRIMATECH Projector" },
                                    { name: "PROLIGHT Projector" },
                                    { name: "SONY Projector" },
                                    { name: "VIEWSONIC Projector" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "PRINTER",
                children: [
                    {
                        name: "Barcode/Label",
                        children: [
                            { name: "BROTHER Barcode/label" },
                            { name: "EPSON Barcode/Label" },
                            { name: "HONEYWELL Barcode/label" },
                            { name: "OKI Barcode/label" },
                            { name: "POSTEK Barcode/label" },
                            { name: "PRINTRONIX Barcode/label" },
                            { name: "TOSHIBA Barcode/label" },
                            { name: "TSC Barcode/label" },
                            { name: "WINCODE Barcode/Label" },
                            { name: "ZEBRA Barcode/Label" }
                        ]
                    },
                    {
                        name: "Dot Matrix",
                        children: [
                            { name: "EPSON Dot Matrix" },
                            { name: "JOLLIMARK Dot Matrix" },
                            { name: "OKI Dot Matrix" },
                            { name: "PRIMATECH Dot Matrix" },
                            { name: "PRINTRONIX Dot Matrix" }
                        ]
                    },
                    {
                        name: "ID Card",
                        children: [
                            { name: "DATACARD ID Card" },
                            { name: "DUALI Id Card" },
                            { name: "ENTRUST ID Card" },
                            { name: "EVOLIS ID Card" },
                            { name: "FARGO ID Card" },
                            { name: "HITI Id Card" },
                            { name: "ZEBRA ID Card" }
                        ]
                    },
                    {
                        name: "Printer 3D",
                        children: [
                            { name: "MakerBot Printing Printer 3D" },
                            { name: "XYZ Printing Printer 3D" }
                        ]
                    },
                    {
                        name: "Printer InkJet",
                        children: [
                            { name: "BROTHER Printer InkJet" },
                            { name: "CANON Printer InkJet" },
                            { name: "EPSON Printer InkJet" },
                            { name: "HP Printer InkJet" }
                        ]
                    },
                    {
                        name: "Printer LaserJet",
                        children: [
                            { name: "BROTHER Printer LaserJet" },
                            { name: "CANON Printer LaserJet" },
                            { name: "FUJI XEROX Printer LaserJet" },
                            { name: "HP Printer LaserJet" },
                            { name: "OKI Printer LaserJet" },
                            { name: "PANTUM Printer LaserJet" }
                        ]
                    },
                    {
                        name: "Sparepart Printer",
                        children: [
                            { name: "CANON Sparepart Printer" },
                            { name: "OKI Sparepart Printer" }
                        ]
                    }
                ]
            },
            {
                name: "PROFESSIONAL DISPLAY",
                children: [
                    {
                        name: "Aksesoris Videowall",
                        children: [
                            { name: "Bracket Videowall" },
                            { name: "Processor Videowall" }
                        ]
                    },
                    {
                        name: "Digital Signage",
                        children: [
                            { name: "AOC Digital Signage" },
                            { name: "AUROMAGE Digital Signage" },
                            { name: "BENQ Digital Signage" },
                            { name: "BRIGHTSIGN Digital Signage" },
                            { name: "DIGISIGN Digital Signage" },
                            { name: "FORETELL Digital Signage" },
                            { name: "GOODVIEW Digital Signage" },
                            { name: "HIKVISION Digital Signage" },
                            { name: "LG Digital Signage" },
                            { name: "PHILIPS Digital Signage" },
                            { name: "PRIMATECH Digital Signage" },
                            { name: "SAMSUNG Digital Signage" },
                            { name: "TOYANI Digital Signage" },
                            { name: "VESTOUCH Digital Signage" },
                            { name: "VIEWSONIC Digital Signage" },
                            { name: "WEARNES Digital Signage" }
                        ]
                    },
                    {
                        name: "KIOSK and Options",
                        children: [
                            { name: "DIGISIGN KIOSK dan Options" },
                            { name: "LG KIOSK dan Options" },
                            { name: "ONESIA KIOSK and Options" }
                        ]
                    },
                    {
                        name: "Videotron",
                        children: [
                            { name: "PRIMATECH Videotron" }
                        ]
                    },
                    {
                        name: "Videowall",
                        children: [
                            { name: "AOC Videowall" },
                            { name: "BELYST Videowall" },
                            { name: "BENQ Videowall" },
                            { name: "DIGILIGHT Videowall" },
                            { name: "HIKVISION Videowall" },
                            { name: "LG Videowall" },
                            { name: "ORION Videowall" },
                            { name: "PANASONIC Videowall" },
                            { name: "PHILIPS Videowall" },
                            { name: "PRIMATECH Videowall" },
                            { name: "PROLIGHT Videowall" },
                            { name: "SAMSUNG Videowall" },
                            { name: "USENDA Videowall" }
                        ]
                    }
                ]
            },
            {
                name: "SCANNER",
                children: [
                    {
                        name: "Scanner Biometrix",
                        children: [
                            { name: "BIOMORF Scanner Biometrix" },
                            { name: "CMITECH Scanner Biometrix" }
                        ]
                    },
                    {
                        name: "Scanner Dokumen",
                        children: [
                            { name: "AVISION Scanner Dokumen" },
                            { name: "BROTHER Scanner Dokumen" },
                            { name: "CANON Scanner Dokumen" },
                            { name: "COLORTRAC Scanner Dokumen" },
                            { name: "CREAFORM Scanner Dokumen" },
                            { name: "EPSON Scanner Dokumen" },
                            { name: "FUJI XEROX Scanner Dokumen" },
                            { name: "FUJITSU Scanner Dokumen" },
                            { name: "HP Scanner Dokumen" },
                            { name: "KODAK Scanner Dokumen" },
                            { name: "MICROTEK Scanner Dokumen" },
                            { name: "OEM Scanner Dokumen" },
                            { name: "PANASONIC Scanner Dokumen" },
                            { name: "PLUSTEK Scanner Dokumen" },
                            { name: "VIISAN Scanner Dokumen" }
                        ]
                    }
                ]
            },
            {
                name: "TELECONFERENCE",
                children: [
                    {
                        name: "Conference Phones",
                        children: [
                            { name: "AVER Conference Phones" },
                            { name: "PANASONIC Conference Phones" },
                            { name: "POLYCOM Conference Phones" },
                            { name: "YEALINK Conference Phones" }
                        ]
                    },
                    {
                        name: "Licensi & Garansi",
                        children: [
                            { name: "CISCO Licensi & Garansi" }
                        ]
                    },
                    {
                        name: "Video Conference",
                        children: [
                            { name: "AMX Video Conference" },
                            { name: "AVER Video Conference" },
                            { name: "CISCO Video Conference" },
                            { name: "IBRIGHT Video Conference" },
                            { name: "LOGITECH Video Conference" },
                            { name: "MAXHUB Video Conference" },
                            { name: "POLYCOM Video Conference" },
                            { name: "TENVEO Video Conference" },
                            { name: "YEALINK Video Conference" }
                        ]
                    }
                ]
            },
            {
                name: "TELEPHONES",
                children: [
                    { name: "ALCATEL LUCENT Telephones" },
                    { name: "CISCO Telephones" },
                    { name: "FANVIL Telephones" },
                    { name: "PANASONIC Telephones" },
                    { name: "Tool & Accessories" },
                    { name: "YEALINK Telephones" }
                ]
            }
        ]
    },
    {
        name: "Point Of Sales",
        children: [
            {
                name: "Laci Kasir",
                children: [
                    { name: "KASSEN Laci Kasir" },
                    { name: "SECUREBOX Laci Kasir" }
                ]
            },
            {
                name: "Mesin Kasir",
                children: [
                    { name: "SHARP Mesin Kasir" }
                ]
            },
            {
                name: "Mobile Printer",
                children: [
                    { name: "BROTHER Mobile Printer" },
                    { name: "CANON Mobile Printer" },
                    { name: "GOWELL Mobile Printer" }
                ]
            },
            {
                name: "Monitor Kasir",
                children: [
                    { name: "CODESOFT Monitor Kasir" },
                    { name: "KASSEN Monitor Kasir" },
                    { name: "WEARNES Monitor Kasir" }
                ]
            },
            {
                name: "Printer Kasir",
                children: [
                    { name: "BIXOLON Printer Kasir" },
                    { name: "CODESOFT Printer Kasir" },
                    { name: "EPSON Printer Kasir" },
                    { name: "GOWELL Printer Kasir" },
                    { name: "HONEYWELL Printer Kasir" },
                    { name: "MATRIX POINT Printer Kasir" },
                    { name: "MINIPOS Printer Kasir" },
                    { name: "PRIMATECH Printer Kasir" },
                    { name: "PRINTRONIX Printer Kasir" },
                    { name: "STAR Printer Kasir" },
                    { name: "XPRINTER Printer Kasir" },
                    { name: "ZEBRA Printer Kasir" }
                ]
            },
            {
                name: "Scanner Barcode",
                children: [
                    { name: "DATALOGIC Scanner Barcode" },
                    { name: "GOWELL Scanner Barcode" },
                    { name: "HONEYWELL Scanner Barcode" },
                    { name: "LOGIC Scanner Barcode" },
                    { name: "MINIPOS Scanner Barcode" },
                    { name: "MOBICOM Scanner Barcode" },
                    { name: "PRIMATECH Scanner Barcode" },
                    { name: "SCANLOGIC Scanner Barcode" },
                    { name: "SOLUTION Scanner Barcode" },
                    { name: "ZEBRA Scanner Barcode" }
                ]
            }
        ]
    },
    {
        name: "Security System",
        children: [
            {
                name: "CCTV",
                children: [
                    {
                        name: "Accessories CCTV",
                        children: [
                            { name: "BOSCH Accessories CCTV" },
                            { name: "DAHUA Accessories CCTV" },
                            { name: "HIKVISION Accessories CCTV" },
                            { name: "MAPESEN Accessories CCTV" },
                            { name: "MILESIGHT Accessories CCTV" }
                        ]
                    },
                    {
                        name: "Analog CCTV",
                        children: [
                            { name: "AVTECH Analog CCTV" },
                            { name: "CP PLUS Analog CCTV" },
                            { name: "DAHUA Analog CCTV" },
                            { name: "HIKVISION Analog CCTV" },
                            { name: "HILOOK Analog CCTV" },
                            { name: "HONEYWELL Analog CCTV" },
                            { name: "IPEKAM Analog CCTV" },
                            { name: "KANA Analog CCTV" },
                            { name: "PANASONIC Analog CCTV" },
                            { name: "PRIMATECH Analog CCTV" },
                            { name: "SPC Analog CCTV" }
                        ]
                    },
                    {
                        name: "IP Camera CCTV",
                        children: [
                            { name: "AVER IP Camera CCTV" },
                            { name: "BOSCH IP Camera CCTV" },
                            { name: "D-LINK IP Camera CCTV" },
                            { name: "DAHUA IP Camera CCTV" },
                            { name: "EZVIZ IP Camera CCTV" },
                            { name: "HIKVISION IP Camera CCTV" },
                            { name: "HONEYWELL IP Camera CCTV" },
                            { name: "KANA IP Camera CCTV" },
                            { name: "LINKSYS IP Camera CCTV" },
                            { name: "MAPESEN IP Camera CCTV" },
                            { name: "MILESIGHT IP Camera CCTV" },
                            { name: "PANASONIC IP Camera CCTV" },
                            { name: "PRIMATECH IP Camera CCTV" },
                            { name: "PROLINK IP Camera CCTV" },
                            { name: "SONY IP Camera CCTV" },
                            { name: "SPC IP Camera CCTV" },
                            { name: "TP-LINK IP Camera CCTV" },
                            { name: "UBIQUITI IP Camera CCTV" },
                            { name: "XIAOMI IP Camera CCTV" }
                        ]
                    },
                    {
                        name: "Paket CCTV",
                        children: [
                            { name: "DAHUA Paket CCTV" },
                            { name: "HIKVISION Paket CCTV" }
                        ]
                    },
                    {
                        name: "DVR",
                        children: [
                            { name: "AVTECH Digital Video Recording" },
                            { name: "CP PLUS Digital Video Recording" },
                            { name: "HIKVISION Digital Video Recording" },
                            { name: "HILOOK Digital Video Recording" },
                            { name: "HONEYWELL Digital Video Recording" },
                            { name: "IPEKAM Digital Video Recording" },
                            { name: "KANA Digital Video Recording" },
                            { name: "PANASONIC Digital Video Recording" },
                            { name: "PRIMATECH Digital Video Recording" }
                        ]
                    },
                    {
                        name: "NVR",
                        children: [
                            { name: "AVTECH Network Video Recording" },
                            { name: "D-LINK Network Video Recording" },
                            { name: "DAHUA Network Video Recording" },
                            { name: "DOWTEL Network Video Recording" },
                            { name: "HIKVISION Network Video Recording" },
                            { name: "HONEYWELL Network Video Recording" },
                            { name: "LINKSYS Network Video Recording" },
                            { name: "MAPESEN Network Video Recording" },
                            { name: "MILESIGHT Network Video Recording" },
                            { name: "PANASONIC Network Video Recording" },
                            { name: "SYNOLOGY Network Video Recording" },
                            { name: "UBIQUITI Network Video Recording" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Software Asli",
        children: [
            {
                name: "Lisensi",
                children: [
                    { name: "Cisco Lisensi" },
                    { name: "Netgear Lisensi" }
                ]
            },
            {
                name: "Microsoft",
                children: [
                    { name: "Microsoft ESD" },
                    { name: "Microsoft FPP" },
                    { name: "Microsoft OEM" }
                ]
            },
            {
                name: "Software Data Analysis Licencing",
                children: [
                    { name: "IBM Software Data Analysis Licencing" },
                    { name: "Microsoft Software Data Analysis Licencing" },
                    { name: "ORACLE Software Data Analysis Licencing" }
                ]
            },
            {
                name: "Software Database Licensing",
                children: [
                    { name: "ORACLE Software Database Licensing" }
                ]
            },
            {
                name: "Software Design and Multimedia Licensing",
                children: [
                    { name: "ADOBE Software Design and Multimedia Licensing" },
                    { name: "AUTODESK Software Design and Multimedia Licensing" }
                ]
            },
            {
                name: "Software Developer Licensing",
                children: [
                    { name: "Microsoft Software Developer Licensing" }
                ]
            },
            {
                name: "Software Office Productivity Licencing",
                children: [
                    { name: "Adobe Software Office Productivity Licencing" },
                    { name: "Microsoft Software Office Productivity Licencing" }
                ]
            },
            {
                name: "Software Operation System Licensing",
                children: [
                    { name: "CISCO Software Operation System Licensing" },
                    { name: "MICROSOFT Software Operation System Licensing" },
                    { name: "VMWARE Software Operation System Licensing" }
                ]
            },
            {
                name: "Software Security and Antivirus Licensing",
                children: [
                    { name: "ESET Software Security and Antivirus Licensing" },
                    { name: "FORTINET Software Security and Antivirus Licensing" },
                    { name: "INTEGO Software Security and Antivirus Licensing" },
                    { name: "KASPERSKY Software Security and Antivirus Licensing" },
                    { name: "MCAFEE Software Security and Antivirus Licensing" },
                    { name: "SOPHOS Software Security and Antivirus Licensing" },
                    { name: "SYMANTEC Software Security and Antivirus Licensing" }
                ]
            },
            {
                name: "Software Utility Licensing",
                children: [
                    { name: "ACRONIS Software Utility Licensing" },
                    { name: "BITDEFENDER Software Utility Licensing" },
                    { name: "CISCO Software Utility Licensing" },
                    { name: "EG Software Utility Licensing" },
                    { name: "MICROSOFT Software Utility Licensing" },
                    { name: "TEAMVIEWER Software Utility Licensing" },
                    { name: "VMWARE Software Utility Licensing" }
                ]
            }
        ]
    },
    {
        name: "Storage",
        children: [
            {
                name: "Flashdisk",
                children: [
                    { name: "ADATA Flashdisk" },
                    { name: "Apacer Flashdisk" },
                    { name: "DYNABOOK Flashdisk" },
                    { name: "HP Flashdisk" },
                    { name: "iStorage Flashdisk" },
                    { name: "KINGSTON Flashdisk" },
                    { name: "Kioxia Flashdisk" },
                    { name: "Philips Flashdisk" },
                    { name: "Samsung Flashdisk" },
                    { name: "SANDISK Flashdisk" },
                    { name: "Toshiba Flashdisk" },
                    { name: "Transcend Flashdisk" },
                    { name: "V-GEN Flashdisk" },
                    { name: "Vandisk Flashdisk" },
                    { name: "VERBATIM Flashdisk" }
                ]
            },
            {
                name: "Harddisk",
                children: [
                    {
                        name: "Harddisk Case",
                        children: [
                            { name: "CADDY Harddisk Case" },
                            { name: "ORICO Harddisk Case" }
                        ]
                    },
                    {
                        name: "Harddisk External",
                        children: [
                            { name: "Adata Harddisk External" },
                            { name: "Buffalo Harddisk External" },
                            { name: "Hitachi Harddisk External" },
                            { name: "HP Harddisk External" },
                            { name: "iStorage Harddisk External" },
                            { name: "SEAGATE Harddisk External" },
                            { name: "SILICON POWER Harddisk External" },
                            { name: "TOSHIBA Harddisk External" },
                            { name: "Transcend Harddisk External" },
                            { name: "Vantec Harddisk External" },
                            { name: "Western Digital Harddisk External" }
                        ]
                    },
                    {
                        name: "Harddisk Internal",
                        children: [
                            { name: "CISCO Harddisk Internal" },
                            { name: "DELL Harddisk Internal" },
                            { name: "HITACHI Harddisk Internal" },
                            { name: "HPE Harddisk Internal" },
                            { name: "HUAWEI Harddisk Internal" },
                            { name: "IBM Harddisk Internal" },
                            { name: "LENOVO Harddisk Internal" },
                            { name: "SAMSUNG Harddisk Internal" },
                            { name: "SEAGATE Harddisk Internal" },
                            { name: "SYNOLOGY Harddisk Internal" },
                            { name: "WESTERN DIGITAL Harddisk Internal" }
                        ]
                    }
                ]
            },
            {
                name: "Network Attached Storage",
                children: [
                    {
                        name: "NAS Storage Rackmount",
                        children: [
                            { name: "ASUSTOR NAS Storage Rackmount" },
                            { name: "DELL EMC Nas Storage Rackmount" },
                            { name: "HPE NAS Storage Rackmount" },
                            { name: "NETGEAR NAS Storage Rackmount" },
                            { name: "QNAP NAS Storage Rackmount" },
                            { name: "SYNOLOGY NAS Storage Rackmount" }
                        ]
                    },
                    {
                        name: "NAS Storage Tower",
                        children: [
                            { name: "ASUSTOR NAS Storage Tower" },
                            { name: "HPE NAS Storage Tower" },
                            { name: "NETGEAR NAS Storage Tower" },
                            { name: "QNAP NAS Storage Tower" },
                            { name: "SEAGATE NAS Storage Tower" },
                            { name: "SYNOLOGY NAS Storage Tower" }
                        ]
                    }
                ]
            },
            {
                name: "SSD",
                children: [
                    {
                        name: "SSD Eksternal",
                        children: [
                            { name: "SEAGATE SSD Eksternal" },
                            { name: "SONY SSD Eksternal" },
                            { name: "WESTERN DIGITAL SSD Eksternal" }
                        ]
                    },
                    {
                        name: "SSD External",
                        children: [
                            { name: "SEAGATE SSD Eksternal" }
                        ]
                    },
                    {
                        name: "SSD Gaming",
                        children: [
                            { name: "SAMSUNG SSD Gaming" },
                            { name: "SEAGATE SSD Gaming" }
                        ]
                    },
                    {
                        name: "SSD Internal",
                        children: [
                            { name: "ADATA SSD Internal" },
                            { name: "APACER SSD Internal" },
                            { name: "CRUCIAL SSD Internal" },
                            { name: "DYNABOOK SSD Internal" },
                            { name: "KINGSTON SSD Internal" },
                            { name: "KIOXIA SSD Internal" },
                            { name: "LEXAR SSD Internal" },
                            { name: "MIDASFORCE SSD Internal" },
                            { name: "MSI SSD Internal" },
                            { name: "Netac SSD Internal" },
                            { name: "PNY SSD Internal" },
                            { name: "SAMSUNG SSD Internal" },
                            { name: "SANDISK SSD Internal" },
                            { name: "SEAGATE SSD Internal" },
                            { name: "SILICON POWER SSD Internal" },
                            { name: "SK HYNIX SSD Internal" },
                            { name: "TOSHIBA SSD Internal" },
                            { name: "V-GEN SSD Internal" },
                            { name: "VERBATIM SSD Internal" },
                            { name: "WESTERN DIGITAL SSD Internal" }
                        ]
                    },
                    {
                        name: "SSD Portable",
                        children: [
                            { name: "CRUCIAL SSD Portable" },
                            { name: "DYNABOOK SSD Portable" },
                            { name: "KINGSTON SSD Portable" },
                            { name: "SAMSUNG SSD Portable" },
                            { name: "SANDISK SSD Portable" },
                            { name: "SEAGATE SSD Portable" },
                            { name: "WESTERN DIGITAL SSD Portable" }
                        ]
                    }
                ]
            },
            {
                name: "Storage Area Network",
                children: [
                    {
                        name: "SAN Storage",
                        children: [
                            { name: "DELL EMC SAN Storage" },
                            { name: "HPE SAN Storage" },
                            { name: "Huawei SAN Storage" },
                            { name: "IBM SAN Storage" },
                            { name: "Lenovo SAN Storage" },
                            { name: "NetApp SAN Storage" }
                        ]
                    },
                    {
                        name: "SAN Switch",
                        children: [
                            { name: "DELL EMC SAN Switch" },
                            { name: "LENOVO SAN Switch" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Supplies",
        children: [
            {
                name: "Consumables Printer",
                children: [
                    {
                        name: "Tinta Printer / Cartridge",
                        children: [
                            { name: "CANON Tinta Printer / Cartridge" }
                        ]
                    }
                ]
            }
        ]
    }

			
	]
    };
    
    // Create the floating menu
    function createFloatingMenu() {
        // Create menu button
        const menuButton = document.createElement('button');
        menuButton.id = 'floatingMenuButton';
        menuButton.className = 'w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg transition-all duration-300 fixed z-1000';
        menuButton.style.backgroundColor = config.menuButtonColor;
        menuButton.style.top = '50%';
        menuButton.style.transform = 'translateY(-50%)';
        menuButton.style[config.menuButtonPosition] = '24px';
        menuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        
        // Add hover effect
        menuButton.addEventListener('mouseenter', function() {
            this.style.backgroundColor = config.menuButtonHoverColor;
        });
        menuButton.addEventListener('mouseleave', function() {
            this.style.backgroundColor = config.menuButtonColor;
        });
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.id = 'floatingMenuOverlay';
        overlay.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 hidden opacity-0 transition-opacity duration-1000';
        
        // Create menu container
        const menuContainer = document.createElement('div');
        menuContainer.id = 'floatingMenuContainer';
        menuContainer.className = 'fixed inset-0 flex items-center justify-center z-1000 hidden';
        
        // Create menu content
        menuContainer.innerHTML = `
            <div class="bg-white rounded-lg shadow-xl w-11/12 max-w-4xl h-5/6 category-menu fade-in">
                <div class="flex justify-between items-center p-4 border-b">
                    <h2 class="text-xl font-bold text-gray-800">Product Categories</h2>
                    <button id="closeFloatingMenu" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times text-2xl"></i>
                    </button>
                </div>
                <div class="p-4 border-b">
                    <div class="relative">
                        <input type="text" id="searchFloatingMenu" placeholder="Search categories..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                        <div class="absolute right-3 top-2.5 text-gray-400">
                            <i class="fas fa-search"></i>
                        </div>
                    </div>
                    <div id="floatingMenuSearchResults" class="mt-2 hidden">
                        <p class="text-sm text-gray-600">No results found</p>
                    </div>
                </div>
                <div class="p-4 overflow-y-auto">
                    <div id="floatingMenuContent" class="space-y-2"></div>
                </div>
            </div>
        `;
        
        // Add elements to body
        document.body.appendChild(menuButton);
        document.body.appendChild(overlay);
        document.body.appendChild(menuContainer);
        
        // Initialize menu
        initMenu();
    }
    
    // Initialize menu functionality
    function initMenu() {
        const menuButton = document.getElementById('floatingMenuButton');
        const overlay = document.getElementById('floatingMenuOverlay');
        const menuContainer = document.getElementById('floatingMenuContainer');
        const closeButton = document.getElementById('closeFloatingMenu');
        const menuContent = document.getElementById('floatingMenuContent');
        const searchInput = document.getElementById('searchFloatingMenu');
        const searchResults = document.getElementById('floatingMenuSearchResults');
        
        // Generate menu HTML
        menuContent.innerHTML = generateMenuHTML(config.categories);
        
        // Toggle menu function
        function toggleMenu() {
            overlay.classList.toggle('hidden');
            menuContainer.classList.toggle('hidden');
            
            if (!overlay.classList.contains('hidden')) {
                setTimeout(() => {
                    overlay.classList.remove('opacity-0');
                    overlay.classList.add('opacity-100');
                    searchInput.value = '';
                    filterMenu('');
                    searchInput.focus();
                }, 10);
            } else {
                overlay.classList.remove('opacity-100');
                overlay.classList.add('opacity-0');
            }
        }
        
        // Event listeners
        menuButton.addEventListener('click', toggleMenu);
        closeButton.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
        
        // Search functionality
        searchInput.addEventListener('input', (e) => {
            filterMenu(e.target.value);
        });
        
        // Add toggle functionality to category items with children
        document.addEventListener('click', function(e) {
            if (e.target.closest('.toggle-icon')) {
                const item = e.target.closest('.category-item');
                const toggleIcon = item.querySelector('.toggle-icon');
                
                // Find the next element which should be the submenu
                let nextElement = item.nextElementSibling;
                while (nextElement && !nextElement.classList.contains('submenu')) {
                    nextElement = nextElement.nextElementSibling;
                }
                
                if (nextElement && nextElement.classList.contains('submenu')) {
                    nextElement.classList.toggle('visible');
                    toggleIcon.classList.toggle('rotated');
                    
                    // Prevent the click from triggering the link
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        });
        
        // Function to generate menu HTML with links
        function generateMenuHTML(categories, level = 0) {
            let html = '';
            const padding = level * 20;
            
            categories.forEach(category => {
                const hasChildren = category.children && category.children.length > 0;
                const href = category.href || '#';
                
                html += `
                    <div class="category-item rounded-lg py-2 px-4 cursor-pointer" style="padding-left: ${padding}px">
                        <div class="flex justify-between items-center">
                            <a href="${href}" class="font-medium flex-1 hover:underline">${category.name}</a>
                            ${hasChildren ? '<i class="fas fa-chevron-down text-xs toggle-icon"></i>' : ''}
                        </div>
                    </div>
                `;
                
                if (hasChildren) {
                    html += `
                        <div class="submenu" style="padding-left: ${padding + 20}px">
                            ${generateMenuHTML(category.children, level + 1)}
                        </div>
                    `;
                }
            });
            
            return html;
        }
        
        // Function to filter menu based on search query
        function filterMenu(query) {
            const allItems = menuContent.querySelectorAll('.category-item');
            const allSubmenus = menuContent.querySelectorAll('.submenu');
            
            if (!query) {
                // Show all items if no query
                allItems.forEach(item => {
                    item.classList.remove('hidden');
                });
                
                // Reset all submenus to their default state
                allSubmenus.forEach(submenu => {
                    submenu.classList.remove('visible');
                });
                
                // Reset all toggle icons
                const allIcons = menuContent.querySelectorAll('.toggle-icon');
                allIcons.forEach(icon => {
                    icon.classList.remove('rotated');
                });
                
                searchResults.classList.add('hidden');
                return;
            }
            
            const lowerQuery = query.toLowerCase();
            let foundMatch = false;
            
            // First hide all items
            allItems.forEach(item => {
                item.classList.add('hidden');
            });
            
            // Show only matching items and their parents
            allItems.forEach(item => {
                const itemText = item.querySelector('a').textContent.toLowerCase();
                
                if (itemText.includes(lowerQuery)) {
                    foundMatch = true;
                    
                    // Show this item
                    item.classList.remove('hidden');
                    
                    // Show all parent items and expand their submenus
                    let currentItem = item;
                    while (currentItem) {
                        currentItem.classList.remove('hidden');
                        
                        // If this item has a submenu, expand it
                        const toggleIcon = currentItem.querySelector('.toggle-icon');
                        if (toggleIcon) {
                            let nextElement = currentItem.nextElementSibling;
                            while (nextElement && !nextElement.classList.contains('submenu')) {
                                nextElement = nextElement.nextElementSibling;
                            }
                            
                            if (nextElement && nextElement.classList.contains('submenu')) {
                                nextElement.classList.add('visible');
                                toggleIcon.classList.add('rotated');
                            }
                        }
                        
                        // Move to the parent item
                        currentItem = currentItem.previousElementSibling;
                        while (currentItem && !currentItem.classList.contains('category-item')) {
                            currentItem = currentItem.previousElementSibling;
                        }
                    }
                }
            });
            
            // Show search results if no matches found in the menu
            if (!foundMatch) {
                const results = searchCategories(query);
                displaySearchResults(results, query);
            } else {
                searchResults.classList.add('hidden');
            }
        }
        
        // Function to search through categories
        function searchCategories(query) {
            const results = [];
            const lowerQuery = query.toLowerCase();
            
            function searchInCategory(category, path = '') {
                const currentPath = path ? `${path} > ${category.name}` : category.name;
                
                if (category.name.toLowerCase().includes(lowerQuery)) {
                    results.push({
                        name: category.name,
                        href: category.href || '#',
                        path: currentPath
                    });
                }
                
                if (category.children) {
                    category.children.forEach(child => {
                        searchInCategory(child, currentPath);
                    });
                }
            }
            
            config.categories.forEach(category => {
                searchInCategory(category);
            });
            
            return results;
        }
        
        // Function to display search results
        function displaySearchResults(results, query) {
            searchResults.innerHTML = '';
            
            if (results.length === 0) {
                searchResults.innerHTML = '<p class="text-sm text-gray-600 p-2">No results found</p>';
                searchResults.classList.remove('hidden');
                return;
            }
            
            searchResults.classList.remove('hidden');
            
            const resultsList = document.createElement('div');
            resultsList.className = 'space-y-2';
            
            results.forEach(result => {
                const resultItem = document.createElement('a');
                resultItem.href = result.href;
                resultItem.className = 'block p-2 rounded hover:bg-gray-100 transition-colors';
                
                // Highlight the search term in the result
                const highlightedName = highlightText(result.name, query);
                const highlightedPath = highlightText(result.path, query);
                
                resultItem.innerHTML = `
                    <div class="font-medium">${highlightedName}</div>
                    <div class="text-xs text-gray-500">${highlightedPath}</div>
                `;
                
                resultsList.appendChild(resultItem);
            });
            
            searchResults.appendChild(resultsList);
        }
        
        // Function to highlight text in search results
        function highlightText(text, searchTerm) {
            if (!searchTerm) return text;
            
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            return text.replace(regex, '<span class="highlight">$1</span>');
        }
    }
    
    // Initialize the menu when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createFloatingMenu);
    } else {
        createFloatingMenu();
    }
    
})();
