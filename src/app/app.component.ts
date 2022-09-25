import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ExcelService } from './services/excel.service';
import { environment } from '../environments/environment';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})


export class AppComponent {
    horizontalPosition: MatSnackBarHorizontalPosition = 'start';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';

    show: boolean = false;
    title = 'Nokia';
    durationInSeconds = 3;
    dataOfATC: any = []
    //   [
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:00:1.055",
    //         "Status": "OK",
    //         "Testcase": "CPU_MONITERING_FUNC_01"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:01:4.829",
    //         "Status": "OK",
    //         "Testcase": "CPU_MONITERING_FUNC_02"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:00:0.315",
    //         "Status": "OK",
    //         "Testcase": "MEMORY_MONITERING_FUNC_04"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:14:3.127",
    //         "Status": "OK",
    //         "Testcase": "CPU_MEM_MONITERING_RECOVERY_01"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:10:8.551",
    //         "Status": "OK",
    //         "Testcase": "CPU_MEM_MONITERING_RECOVERY_02"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:06:24.905",
    //         "Status": "TI",
    //         "Testcase": "L3FWD_IPV4_ACL_SDFX_01"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:11:22.247",
    //         "Status": "TI",
    //         "Testcase": "L3FWD_IPV4_ACL_SDFX_02"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:06:41.085",
    //         "Status": "TI",
    //         "Testcase": "L3FWD_IPV4_ACL_SDFX_03"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:09:18.701",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_ACL_SDFX_05"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:09:2.208",
    //         "Status": "TI",
    //         "Testcase": "L3FWD_IPV4_ACL_SDFX_06"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:07:23.247",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_ACL_SDFX_08"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:09:34.879",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_ACL_SDFX_09"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:07:18.913",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_ACL_SDFX_10"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:07:52.426",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_ACL_SDFX_11"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:05:6.152",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_ACL_SDFX_12"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:05:9.826",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_ACL_SDFX_13"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:04:22.162",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_ACL_SDFX_14"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:05:6.209",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_01"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:05:6.342",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_02"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:14:48.265",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_04"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:09:32.332",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_05"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:06:18.966",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_06"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:08:50.744",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_07"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:07:2.895",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_09"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:09:7.637",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_10"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:01:46.709",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_11"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:06:27.255",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_12"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:02:13.871",
    //         "Status": "TI",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_13"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:10:10.388",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_14"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:03:55.324",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_15"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:02:24.857",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_16"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:08:26.453",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_MULTICAST_SDFX_01"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:05:37.746",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_MULTICAST_SDFX_02"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:06:30.712",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_MULTICAST_SDFX_05"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:05:33.173",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_MULTICAST_SDFX_06"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:03:17.747",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_MULTICAST_SDFX_07"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:01:4.106",
    //         "Status": "TI",
    //         "Testcase": "L3FWD_IPV4_MULTICAST_SDFX_08"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:04:26.041",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_MULTICAST_SDFX_09"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:08:14.880",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_MULTICAST_SDFX_10"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:00:30.009",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_MULTICAST_SDFX_11"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:02:59.098",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_17"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:02:51.448",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_18"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:17:11.157",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_03"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:14:29.871",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_08"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:29:36.347",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_ACL_SDFX_04"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:24:57.799",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_ACL_SDFX_07"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:19:57.890",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_MULTICAST_SDFX_03"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:14:59.165",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_MULTICAST_SDFX_04"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:08:12.522",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_SCALING_SDFX_01"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:11:23.349",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_SCALING_SDFX_02"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:01:46.243",
    //         "Status": "OK",
    //         "Testcase": "L3FWD_IPV4_SCALING_SDFX_13"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:00:0.074",
    //         "Status": "TI",
    //         "Testcase": "L3FWD_IPV4_UNICAST_SDFX_20"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:00:0.080",
    //         "Status": "TI",
    //         "Testcase": "LMNTB_FUNC_ACL_1"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:00:0.043",
    //         "Status": "TI",
    //         "Testcase": "L3FWD_MF2_ARP_PROXY_01"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:00:0.043",
    //         "Status": "TI",
    //         "Testcase": "L3FWD_MF2_ARP_PROXY_02"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:00:0.043",
    //         "Status": "TI",
    //         "Testcase": "L3FWD_MF2_ARP_PROXY_03"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:00:50.705",
    //         "Status": "OK",
    //         "Testcase": "HOST_L3FWD_IPV4_MULTICAST_CONF_01"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:00:54.568",
    //         "Status": "OK",
    //         "Testcase": "HOST_L3FWD_IPV4_MULTICAST_CONF_02"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:04:7.091",
    //         "Status": "OK",
    //         "Testcase": "HICAP_PORT_LOOPBACK_TUNNEL_CONF_01_MDA_CHANGE"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:06:13.689",
    //         "Status": "OK",
    //         "Testcase": "HICAP_PORT_LOOPBACK_TUNNEL_CONF_02_MDA_CHANGE"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:04:14.715",
    //         "Status": "TI",
    //         "Testcase": "HICAP_PORT_LOOPBACK_TUNNEL_FUNC_01"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:01:14.742",
    //         "Status": "TI",
    //         "Testcase": "HICAP_PORT_LOOPBACK_TUNNEL_FUNC_02"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:04:27.102",
    //         "Status": "TI",
    //         "Testcase": "HICAP_PORT_LOOPBACK_TUNNEL_FUNC_03"
    //     },
    //     {
    //         "Board": "FANT-F",
    //         "Buildname": "2209.458",
    //         "RunTime": "00:16:34.020",
    //         "Status": "OK",
    //         "Testcase": "HICAP_PORT_LOOPBACK_TUNNEL_RECOV_01"
    //     }
    // ]
    data = {};
    constructor(private excelService: ExcelService,
        private httpClient: HttpClient, private _snackBar: MatSnackBar, private cdr: ChangeDetectorRef) {

    }

    exportAsXLSX(): void {
        this.excelService.exportAsExcelFile(this.dataOfATC, 'batch-result');
    }


    openSnackBar(msg: string, action: string, color: string) {
        this._snackBar.open(msg, action, {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000,
            panelClass: [color]
        });
    }


    go(URL: string) {
        if (URL.length > 30) {
            // console.log(URL.length)
            this.httpClient.post(environment.apiKey + '/with-tms', { "url": URL }).subscribe(data => {
                this.data = data
                this.dataOfATC = this.data
                this.show = true;
                this.cdr.detectChanges();
                this.openSnackBar("Data Loaded", "Success", 'blue-snackbar')
                //  console.log(this.dataOfATC,'response') 
            },
                err => {
                    console.log(err.error.msg, 'Error')
                    this.openSnackBar(err.error.msg, "Error", 'red-snackbar')
                });
        }
        else {
            this.openSnackBar("Invalid Entry", "Warning", 'orange-snackbar')
        }


    }
}