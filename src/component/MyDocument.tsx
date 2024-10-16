import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    backgroundColor: "#f9f9f9",
  },
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 20,
  },
  section: {
    flexGrow: 1,
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    fontSize: 10,
  },
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  logo: {
    fontSize: 14,
    alignItems: "center",
  },
  invoice: {
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    display: "flex",
    flexDirection: "row",
    fontSize: 10,
    fontWeight: "normal",
    marginBottom: 3,
  },
  link: {
    display: "flex",
    flexDirection: "row",
    fontSize: 10,
    fontWeight: "normal",
    color: "blue",
    marginBottom: 3,
  },
  table: {
    flexDirection: "column",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  tableHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
  },
  headText: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 3,
    width: "20%",
    justifyContent: "space-between",
    paddingRight: 20,
  },
  tableRow: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 10,
  },
  rowText: {
    fontSize: 10,
    fontWeight: "normal",
    marginBottom: 3,
    paddingRight: 15,
    width: "20%",
    justifyContent: "space-between",
  },
  secTable: {
    marginLeft: 130,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  thirdTableText: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 3,
    width: "16.5%",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  lastrow: {
    flexDirection: "row",
    paddingVertical: 10,
    textAlign: "left",
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    borderTopWidth: 2,
    borderTopColor: "#000",
    borderTopStyle: "solid",
  },
  totalrow: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    width: "270px",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: "auto",
  },
  totalRowText: {
    fontSize: 10,
    fontWeight: "bold",
    width: "50%",
    textAlign: "right",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    borderTopWidth: 2,
    borderTopColor: "#000",
    borderTopStyle: "solid",
  },
  totalAmtText: {
    fontSize: 10,
    fontWeight: "bold",
    width: "50%",
    textAlign: "left",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    borderTopWidth: 2,
    borderTopColor: "#000",
    borderTopStyle: "solid",
  },
  netRow: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    width: "270px",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: "auto",
  },
  netText: {
    display: "flex",
    width: "270px",
    justifyContent: "flex-end",
    alignItems: "center",
    fontSize: 9,
  },
  contact: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 3,
  },
  lastText: {
    marginTop: 10,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontSize: 9,
  },
});

const MyDocument: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.main}>
      <View style={styles.page}>
        <View style={styles.head}>
          <Text style={styles.logo}>Systone</Text>
          <Text style={styles.invoice}>Invoice</Text>
        </View>
        <View style={styles.head}>
          <View style={styles.section}>
            <Text style={styles.headText}>Payable to:</Text>
            <Text style={styles.text}>Blizz inc</Text>
            <Text style={styles.link}>e.bliss.systoneit.com</Text>
            <Text style={styles.text}>undefined, undefined</Text>
            <Text style={styles.text}>undefined</Text>
            <Text style={styles.text}>undefined, undefined</Text>
            <Text style={styles.text}>PHONE: 8163985830</Text>
            <Text style={styles.text}>TIN: 234567890</Text>
            <Text style={styles.text}>DUNS: 2345678</Text>
            <Text style={styles.text}>UEI#: 23456789</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.headText}>Bill to:</Text>
            <Text style={styles.text}>testCompany</Text>
            <Text style={styles.link}>test@email.com</Text>
            <Text style={styles.text}>hey2, man,</Text>
            <Text style={styles.text}>richmond,</Text>
            <Text style={styles.text}>va 2345</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.headText}>Invoice Details:</Text>
            <Text style={styles.text}>
              <Text style={styles.headText}>Invoice No: </Text>
              <Text style={styles.text}>TES-COSMICPROJECT-01-1014</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.headText}>Invoice Date: </Text>
              <Text style={styles.text}>10/02/2024</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.headText}>Due Date: </Text>
              <Text style={styles.text}>10/30/2024</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.headText}>Place of Performance: </Text>
              <Text style={styles.text}>Georgia</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.headText}>Contract POP: </Text>
              <Text style={styles.text}>10/14/2024 to 10/30/2024</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.headText}>Service Date: </Text>
              <Text style={styles.text}>10/01/2024 to 10/29/2024</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.table}>
        <View style={styles.tableHead}>
          <Text style={styles.headText}>Contract #</Text>
          <Text style={styles.headText}>Contract Type</Text>
          <Text style={styles.headText}>Project Type</Text>
          <Text style={styles.headText}>Subcontract #</Text>
          <Text style={styles.headText}>Purchase Order #</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.rowText}>234567</Text>
          <Text style={styles.rowText}>
            Firm Fixed Price, Level-of-effort (FPP, LOE)
          </Text>
          <Text style={styles.rowText}>cosmic Project</Text>
          <Text style={styles.rowText}>7654321</Text>
          <Text style={styles.rowText}></Text>
        </View>
      </View>
      <View style={styles.secTable}>
        <View style={styles.tableHead}>
          <Text style={styles.headText}>CLIN #</Text>
          <Text style={styles.headText}>Purchase Order Funding</Text>
          <Text style={styles.headText}>Current Period Amount</Text>
          <Text style={styles.headText}>Cumulative Amount</Text>
          <Text style={styles.headText}>Remaining Funding</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.rowText}></Text>
          <Text style={styles.rowText}>$10,000.00</Text>
          <Text style={styles.rowText}>$2,000.00</Text>
          <Text style={styles.rowText}>$10,000.00</Text>
          <Text style={styles.rowText}>$0.00</Text>
        </View>
      </View>
      <View style={styles.table}>
        <View style={styles.tableHead}>
          <Text style={styles.thirdTableText}>Products/Services</Text>
          <Text style={styles.thirdTableText}>CLIN #</Text>
          <Text style={styles.thirdTableText}>Current Period Hours</Text>
          <Text style={styles.thirdTableText}>Cumulative hours to Date</Text>
          <Text style={styles.thirdTableText}>Rate</Text>
          <Text style={styles.thirdTableText}>Current Period Amount</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.rowText}>test</Text>
          <Text style={styles.rowText}></Text>
          <Text style={styles.rowText}>20</Text>
          <Text style={styles.rowText}>20</Text>
          <Text style={styles.rowText}>500</Text>
          <Text style={styles.rowText}>$10,000.00</Text>
        </View>
        <View style={styles.lastrow}>
          <Text style={styles.rowText}>Total</Text>
          <Text style={styles.rowText}></Text>
          <Text style={styles.rowText}></Text>
          <Text style={styles.rowText}></Text>
          <Text style={styles.rowText}></Text>
          <Text style={styles.rowText}>$2,000.00</Text>
        </View>
        <View style={styles.totalrow}>
          <Text style={styles.totalAmtText}>TOTAL AMOUNT DUE:</Text>
          <Text style={styles.totalRowText}>$2,000.00</Text>
        </View>
        <View style={styles.netRow}>
          <Text style={styles.netText}>Net Term: 2</Text>
        </View>
      </View>
      <View style={styles.page}>
        <Text style={styles.contact}>
          Contact person for invoice corrections:
        </Text>
        <Text style={styles.text}>Bliss</Text>
        <Text style={styles.text}>3456789</Text>
        <Text style={styles.link}>yet@ymail.com</Text>
        <Text style={styles.lastText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
          doloremque consequatur illo, vero excepturi aperiam quis earum
          distinctio nam rerum animi, cum quas pariatur cumque cupiditate ipsam
          itaque officia id impedit velit! Placeat laborum architecto
          necessitatibus molestiae pariatur magni quod delectus! Tenetur
          excepturi illum corporis totam temporibus illo molestiae eius.
        </Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
