import React, { Component } from "react";
import ThreeOrMore from "./ThreeOrMore";
import "./CentralNews.css";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import TwoNews from "./TwoNews";
import OneNews from "./OneNews";
import { getNews } from "../DataServices/CentralNews";
import Trending from "./Trending";

export default class CentralNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trending: [
        {
          date: "4 April, 2020 09:30 AM",
          title: "Goa: State vying for medical device park",
          description:
            "Panaji: The state has submitted a proposal for setting up a device park at Verna before the Centre, chief minister Pramod Sawant said on Wednesday.The moves are in line with the state government’s attempt to make Goa a healthcare hub where medical tourism and the production of healthcare equipment go hand-in-hand. India’s medical device sector is currently valued at $11 billion, according to Invest in India. Sawant said that four states are in the competition for the park.Goa has identified approximately 250 acres in Verna industrial estate belonging to the Goa Industrial Development Corporation.The development cost for the proposed park is estimated at Rs 350 crore. The state expects Rs 100 crore as grant-in-aid from the Centre, which, will be 70% of the cost of the common infrastructure facilities, subject to a maximum of Rs 100 crore.",
          state: "Maharashtra",
          branch: "Mumbai",
          image: [image1, image1, image1],
          details: "link here",
          author: "Srushti Raybhoge",
        },
        {
          date: "4 April, 2020 09:30 AM",
          title: "Jharkhand govt starts running PHCs with help from NGOs",
          description:
            "SINDRI: In order to rejuvenate the crumbling healthcare system due to lack of medical and para-medical support staff, the state government has decided to run the primary health centres (PHCs) with the help of NGOs.On Tuesday, Dhanbad’s Chirkunda PHC became the first to be operated by and NGO on a public-private partnership.Ganesh Reddy, secretary cum CEO of Citizens Foundation, said the NGO has been entrusted by the Jharkhand chapter of the National Health Mission (NHM) to take charge of Chirkunda PHC on the occasion of the World AIDS Day.“Citizens Foundation has signed an MoU with NHM Jharkhand for 11 such PHCs across six districts in the state,” Reddy said and added the decision will prove to be beneficial for the state in the long run. “We have worked for over a decade in operating community healthcare centres and tribal MESO Hospitals for Meghalaya NHM and Jharkhand Tribal Development Society on a similar model,” he added.“In many states, such a model has been underway for years,” he said.Dhanbad civil surgeon Dr Gopal Das said that since the agreement has been reached at the state level, he has just been informed about Chirkunda and another PHC to be handed over to the NGO.“Just like the previous arrangements, consultations and treatment for the people walking in will continue to be free of cost,” he said, adding that the NGO will use the existing infrastructural facilities of the PHC and deploy its own manpower and provide other facilities as needed. “Medicines will be supplied by the state government as usual,” Das said.",
          state: "Maharashtra",
          branch: "Mumbai",
          image: [image1],
          details: "link here",
          author: "Srushti Raybhoge",
        },
        {
          date: "4 September, 2020 09:30 AM",
          title:
            "Madhya Pradesh: Cabinet clears investment promotion assistance for Oxygen plant in Babai",
          description:
            "BHOPAL: Madhya Pradesh government has decided to facilitate investment promotion assistance for establishment of Mohasa Babai Industrial and Medical Gas production plant in Hoshangabad district. A decision to this effect was taken at a meeting of the Cabinet committee for investment promotion held under the chairmanship of the chief minister Shivraj Singh Chouhan on Wednesday.The committee decided to provide an assistance at the rate of 40% for a period of 7 years to Inox Limited under the Investment Promotion Scheme.Amid shortage of medical oxygen following reluctance of other states for supply during the pandemic, state government decided to set up the plant itself in the state, with an aim of ending dependence on other states for oxygen and making medical oxygen available for Covid patients in the state. Chouhan instructed the departments concerned to expedite the proceedings in this regard.The state government has also approved the license of power distribution through MPIDC, to the Inox Air Products Pvt. Ltd. of Mohasa Babai Industrial Area, a leading manufacturer of industrial gases in the country. Making necessary facilities available to the project, it will support setting up the unit. In view of Covid-19, the process of setting up 210 tonne capacity per day air-separation plant is under way with a capital investment of Rs 125 crore to meet the oxygen demand. The setting up of the project will play an important role in the economic development and supply of oxygen in state.In the meeting, minister for industrial policy and investment promotion Rajvardhan Singh Dattigaon, minister for micro, small & medium enterprises, science & technology minister Omprakash Sakhlecha and minister for medical education, Bhopal gas tragedy, relief and rehabilitation Vishwas Sarang participated via video conferencing.",
          state: "Maharashtra",
          branch: "Pune",
          details: "link here",
          author: "Srushti Raybhoge",
          image: [image2],
        },
        {
          date: "4 September, 2020 09:30 AM",
          title:
            "Chattisgarh: Medical mobile vans to heal poor for free of cost in Raipur",
          description:
            "RAIPUR: To make medical treatment accessible to all, the district administration started medical mobile vans in the slum areas where people can avail free of cost treatment by the doctors. The services would include medical consultation by the MBBS doctor in the slum areas. pathology examination, referral-based ambulance, radiology will be provided in the government hospital for free.The state government, on the occasion of state formation day celebrated on Sunday, had announced to start about 60 mobile medical units in slum areas of 14 municipal corporations and councils of the state under Chief Minister Urban Slum Health Scheme.Raipur mayor Eijaz Dhebar said that the medical mobile vans have been started from zone seven in Chudamani ward, where large number of people availed the medical services.As per officials, the medical mobile vans units are being operated under the urban administration and development department. Its objective is to provide better medical facilities and free medicines to the people of urban slum areas regularly.",
          state: "Maharashtra",
          branch: "Pune",
          details: "link here",
          author: "Srushti Raybhoge",
          image: [image2],
        },
      ],
      news: {
        "2020-10": [
          {
            date: "4 April, 2020 09:30 AM",
            title:
              "Delhi government cancels leaves of all health department staff",
            description:
              "NEW DELHI: Delhi government has cancelled the leaves of all employees under its health department, including doctors and support staff of hospitals, as coronavirus cases in the city continue to rise rapidly. The capital has the third highest number of Covid-19 cases after Maharashtra and Tamil Nadu.“All MDs, dean and directors of hospitals and medical institutions under the health and family welfare department are advised to issue directions to all the staff under them who are on leave to immediately report for their duties,” a government order said. It, however, allowed the employees to take leave under the “most compelling circumstances.”A senior doctor at Rajiv Gandhi Super Specialty hospital said they are facing shortage of staff and in such a situation the hospital cannot afford to have employees taking leave.Lok Nayak hospital has 2,000 Covid-19 beds. Only about 700 of them are full, but the authorities say they aren’t allowing any leaves because given the current crisis extra manpower needs to be available all the time.On Friday, Delhi government had issued orders for deploying final-year postgraduate and undergraduate nursing students to manage Covid-19 patients. The decisions were taken in a meeting deputy chief minister Manish Sisodia with senior health department officials to discuss the augmentation of the ICU beds in the capital.As most of the PG medical institutions in Delhi are affiliated with Guru Govind Singh Indraprastha University, Mahesh Verma — the varsity’s vice-chancellor — has been appointed for the recruitment and deployment of the required number of final-year MD/MS/DNB and nursing students.“Verma is also authorised to recommend necessary stipend payable to the recruits,” stated the order issued by Sisodia, who is in-charge of the health department in the absence of Satyendar Jain. All recruitment will be completed in four days.",
            state: "Maharashtra",
            branch: "Mumbai",
            image: [image2, image1],
            details: "link here",
            author: "Srushti Raybhoge",
          },
          {
            date: "4 April, 2020 09:30 AM",
            title: "Chennai: ‘Hospitals can’t deny aid to Covid patients’",
            description:
              "A letter from the director, who is also the appropriate authority under the Clinical Establishment Act, was sent to all registered hospitals in the state on Friday based on complaints the health department had received over the past few days from patients and doctors at tertiary care government hospitals.",
            state: "Maharashtra",
            branch: "Mumbai",
            image: [image1],
            details: "link here",
            author: "Srushti Raybhoge",
          },
          {
            date: "4 April, 2020 09:30 AM",
            title: "Jipmer gets 49 more MBBS seats this year",
            description:
              "Puducherry: Jawaharlal Institute of Postgraduate Medical Education and Research (Jipmer) has increased the number of MBBS seats from 200 to 249 from the academic year 2020-2021 following approval from the competent authorities. The number of seats in the institute’s Puducherry campus was increased from 150 to 187 and Karaikal campus from 50 to 62. Forty-eight of 187 seats in Puducherry campus and 16 of the 62 seats in Karaikal campus have been reserved for students from the UT. Admission into the MBBS programme will be based on Neet 2020 score. Jipmer conducted entrance examinations separately until last academic year. For more information, visit https://www.mcc.nic.in .",
            state: "Maharashtra",
            branch: "Mumbai",
            image: [image2, image1],
            details: "link here",
            author: "Srushti Raybhoge",
          },
          {
            date: "4 April, 2020 09:30 AM",
            title:
              "Nagpur : Patients can not be turned away from hospitals: HC",
            description: `"Nagpur, Sep 10 : Taking suo moto (on its own) notice of problems faced by patients at hospitals in the district amid the coronavirus pandemic, the Nagpur bench of the Bombay High Court on Thursday said an ailing person can not be turned away from hospitals because of shortage of beds or staff. A division bench of Justices Ravi Deshpande and Pushpa Ganediwala said the main issue which required the court's attention is making ventilators and beds available to patients so as to reduce the death rate."We want all doctors and para-medical staff to rise to the occasion of the severity of the situation and make themselves available 24X7 in this pandemic situation," the court said."We do not want a situation where the patients are required to travel from one hospital to another to secure a bed in the ICU, ventilated beds or (go to another hospital) due to non-availability of doctors and medical staff," the bench said.If a hospital can not accommodate a patient, the authorities should help the patient reach another hospital, the court said.Patients cannot be denied admission to a hospital on the ground of non-availability of medical and para-medical staff, it said."Even private doctors are under obligation to provide treatment. The preservation of human life is of paramount importance. Once life is lost, it cannot be restored."Every doctor, whether they are in government or private hospitals, is under obligation to extend their services," the court said."Private doctors cannot refuse to render their services during such a pandemic," it said adding it is the obligation of the state government to make available doctors and medical staff from all sources.The bench was assured by the Indian Medical Association and a hospitals association that they would submit a list of all the private doctors who render services at hospitals across the city.Nagpur district Collector informed the court that a task force of 12 doctors has been formed for assigning duties and responsibilities to all the doctors in hospitals.The court posted the matter for further hearing on September 15. CLS SP KRK KRK"`,
            state: "Maharashtra",
            branch: "Mumbai",
            image: [image1],
            details: "link here",
            author: "Srushti Raybhoge",
          },
          {
            date: "4 April, 2020 09:30 AM",
            title: "India has plenty of Coronavirus vaccines but few takers",
            description: `Most of the world is struggling to secure enough vaccines to inoculate their populations. India has the opposite problem: Plenty of shots, but a shortage of people willing to take them.As India rolls out one of the world’s biggest inoculation programs, some health-care and other frontline workers are hesitating because of safety concerns over a vaccine that has yet to complete phase III trials. As of Monday, only about 56% of people eligible to get the shot have stepped forward in a nation with the world’s second-worst Covid-19 outbreak.`,
            state: "Maharashtra",
            branch: "Mumbai",
            image: [image1],
            details: "link here",
            author: "Srushti Raybhoge",
          },
          {
            date: "4 April, 2020 09:30 AM",
            title:
              "Reliance signs USD 15 million deal with an Israeli firm to distribute Covid-19 breath test kit",
            description: `BOH is said to have developed a breath test system that identifies Covid-19 at a success rate of over 95 per cent.Preliminary results from clinical trials it is conducting with Israeli hospitals Hadassah Medical Center and the Sheba Medical Center at Tel HaShomer have shown a success rate of 98 per cent compared to the standard PCR test authorised by global medical organisations.The development of BOH's system began two years ago and was initially meant to provide early detection for cancer, Alzheimer's, and lung disease.The company's scientists decided to focus on adapting the system to detect Covid-19 following the outbreak of the pandemic, recognising that it could be a crucial tool in the fight against the virus until the arrival of the vaccines.BOH's CEO, Arie Laor, said that the company had operated under the radar till date in order to focus on its clinical trials and the development of its system, the report said. The agreement will help to accelerate the trials and Laor is expecting results to be announced in the coming weeks, it added.`,
            state: "Maharashtra",
            branch: "Mumbai",
            image: [image1],
            details: "link here",
            author: "Srushti Raybhoge",
          },
        ],
        "2020-09": [
          {
            date: "4 April, 2020 09:30 AM",
            title:
              "Nagpur : Patients can not be turned away from hospitals: HC",
            description: `"Nagpur, Sep 10 : Taking suo moto (on its own) notice of problems faced by patients at hospitals in the district amid the coronavirus pandemic, the Nagpur bench of the Bombay High Court on Thursday said an ailing person can not be turned away from hospitals because of shortage of beds or staff. A division bench of Justices Ravi Deshpande and Pushpa Ganediwala said the main issue which required the court's attention is making ventilators and beds available to patients so as to reduce the death rate."We want all doctors and para-medical staff to rise to the occasion of the severity of the situation and make themselves available 24X7 in this pandemic situation," the court said."We do not want a situation where the patients are required to travel from one hospital to another to secure a bed in the ICU, ventilated beds or (go to another hospital) due to non-availability of doctors and medical staff," the bench said.If a hospital can not accommodate a patient, the authorities should help the patient reach another hospital, the court said.Patients cannot be denied admission to a hospital on the ground of non-availability of medical and para-medical staff, it said."Even private doctors are under obligation to provide treatment. The preservation of human life is of paramount importance. Once life is lost, it cannot be restored."Every doctor, whether they are in government or private hospitals, is under obligation to extend their services," the court said."Private doctors cannot refuse to render their services during such a pandemic," it said adding it is the obligation of the state government to make available doctors and medical staff from all sources.The bench was assured by the Indian Medical Association and a hospitals association that they would submit a list of all the private doctors who render services at hospitals across the city.Nagpur district Collector informed the court that a task force of 12 doctors has been formed for assigning duties and responsibilities to all the doctors in hospitals.The court posted the matter for further hearing on September 15. CLS SP KRK KRK"`,
            state: "Maharashtra",
            branch: "Mumbai",
            image: [image1],
            details: "link here",
            author: "Srushti Raybhoge",
          },
          {
            date: "4 September, 2020 09:30 AM",
            title:
              "Chattisgarh: Medical mobile vans to heal poor for free of cost in Raipur",
            description:
              "RAIPUR: To make medical treatment accessible to all, the district administration started medical mobile vans in the slum areas where people can avail free of cost treatment by the doctors. The services would include medical consultation by the MBBS doctor in the slum areas. pathology examination, referral-based ambulance, radiology will be provided in the government hospital for free.The state government, on the occasion of state formation day celebrated on Sunday, had announced to start about 60 mobile medical units in slum areas of 14 municipal corporations and councils of the state under Chief Minister Urban Slum Health Scheme.Raipur mayor Eijaz Dhebar said that the medical mobile vans have been started from zone seven in Chudamani ward, where large number of people availed the medical services.As per officials, the medical mobile vans units are being operated under the urban administration and development department. Its objective is to provide better medical facilities and free medicines to the people of urban slum areas regularly.",
            state: "Maharashtra",
            branch: "Pune",
            details: "link here",
            author: "Srushti Raybhoge",
            image: [image2],
          },
        ],
        "2020-08": [
          {
            date: "4 April, 2020 09:30 AM",
            title: "Goa: State vying for medical device park",
            description:
              "Panaji: The state has submitted a proposal for setting up a device park at Verna before the Centre, chief minister Pramod Sawant said on Wednesday.The moves are in line with the state government’s attempt to make Goa a healthcare hub where medical tourism and the production of healthcare equipment go hand-in-hand. India’s medical device sector is currently valued at $11 billion, according to Invest in India. Sawant said that four states are in the competition for the park.Goa has identified approximately 250 acres in Verna industrial estate belonging to the Goa Industrial Development Corporation.The development cost for the proposed park is estimated at Rs 350 crore. The state expects Rs 100 crore as grant-in-aid from the Centre, which, will be 70% of the cost of the common infrastructure facilities, subject to a maximum of Rs 100 crore.",
            state: "Maharashtra",
            branch: "Mumbai",
            image: [image1],
            details: "link here",
            author: "Srushti Raybhoge",
          },
          {
            date: "4 April, 2020 09:30 AM",
            title: "Jharkhand govt starts running PHCs with help from NGOs",
            description:
              "SINDRI: In order to rejuvenate the crumbling healthcare system due to lack of medical and para-medical support staff, the state government has decided to run the primary health centres (PHCs) with the help of NGOs.On Tuesday, Dhanbad’s Chirkunda PHC became the first to be operated by and NGO on a public-private partnership.Ganesh Reddy, secretary cum CEO of Citizens Foundation, said the NGO has been entrusted by the Jharkhand chapter of the National Health Mission (NHM) to take charge of Chirkunda PHC on the occasion of the World AIDS Day.“Citizens Foundation has signed an MoU with NHM Jharkhand for 11 such PHCs across six districts in the state,” Reddy said and added the decision will prove to be beneficial for the state in the long run. “We have worked for over a decade in operating community healthcare centres and tribal MESO Hospitals for Meghalaya NHM and Jharkhand Tribal Development Society on a similar model,” he added.“In many states, such a model has been underway for years,” he said.Dhanbad civil surgeon Dr Gopal Das said that since the agreement has been reached at the state level, he has just been informed about Chirkunda and another PHC to be handed over to the NGO.“Just like the previous arrangements, consultations and treatment for the people walking in will continue to be free of cost,” he said, adding that the NGO will use the existing infrastructural facilities of the PHC and deploy its own manpower and provide other facilities as needed. “Medicines will be supplied by the state government as usual,” Das said.",
            state: "Maharashtra",
            branch: "Mumbai",
            image: [image1],
            details: "link here",
            author: "Srushti Raybhoge",
          },
          {
            date: "4 September, 2020 09:30 AM",
            title:
              "Chattisgarh: Medical mobile vans to heal poor for free of cost in Raipur",
            description:
              "RAIPUR: To make medical treatment accessible to all, the district administration started medical mobile vans in the slum areas where people can avail free of cost treatment by the doctors. The services would include medical consultation by the MBBS doctor in the slum areas. pathology examination, referral-based ambulance, radiology will be provided in the government hospital for free.The state government, on the occasion of state formation day celebrated on Sunday, had announced to start about 60 mobile medical units in slum areas of 14 municipal corporations and councils of the state under Chief Minister Urban Slum Health Scheme.Raipur mayor Eijaz Dhebar said that the medical mobile vans have been started from zone seven in Chudamani ward, where large number of people availed the medical services.As per officials, the medical mobile vans units are being operated under the urban administration and development department. Its objective is to provide better medical facilities and free medicines to the people of urban slum areas regularly.",
            state: "Maharashtra",
            branch: "Pune",
            details: "link here",
            author: "Srushti Raybhoge",
            image: [image2],
          },
        ],
        "2020-07": [
          {
            date: "4 April, 2020 09:30 AM",
            title: "Jipmer gets 49 more MBBS seats this year",
            description:
              "Puducherry: Jawaharlal Institute of Postgraduate Medical Education and Research (Jipmer) has increased the number of MBBS seats from 200 to 249 from the academic year 2020-2021 following approval from the competent authorities. The number of seats in the institute’s Puducherry campus was increased from 150 to 187 and Karaikal campus from 50 to 62. Forty-eight of 187 seats in Puducherry campus and 16 of the 62 seats in Karaikal campus have been reserved for students from the UT. Admission into the MBBS programme will be based on Neet 2020 score. Jipmer conducted entrance examinations separately until last academic year. For more information, visit https://www.mcc.nic.in .",
            state: "Maharashtra",
            branch: "Mumbai",
            image: [image1],
            details: "link here",
            author: "Srushti Raybhoge",
          },
        ],
        "2020-06": [
          {
            date: "4 April, 2020 09:30 AM",
            title:
              "Delhi government cancels leaves of all health department staff",
            description:
              "NEW DELHI: Delhi government has cancelled the leaves of all employees under its health department, including doctors and support staff of hospitals, as coronavirus cases in the city continue to rise rapidly. The capital has the third highest number of Covid-19 cases after Maharashtra and Tamil Nadu.“All MDs, dean and directors of hospitals and medical institutions under the health and family welfare department are advised to issue directions to all the staff under them who are on leave to immediately report for their duties,” a government order said. It, however, allowed the employees to take leave under the “most compelling circumstances.”A senior doctor at Rajiv Gandhi Super Specialty hospital said they are facing shortage of staff and in such a situation the hospital cannot afford to have employees taking leave.Lok Nayak hospital has 2,000 Covid-19 beds. Only about 700 of them are full, but the authorities say they aren’t allowing any leaves because given the current crisis extra manpower needs to be available all the time.On Friday, Delhi government had issued orders for deploying final-year postgraduate and undergraduate nursing students to manage Covid-19 patients. The decisions were taken in a meeting deputy chief minister Manish Sisodia with senior health department officials to discuss the augmentation of the ICU beds in the capital.As most of the PG medical institutions in Delhi are affiliated with Guru Govind Singh Indraprastha University, Mahesh Verma — the varsity’s vice-chancellor — has been appointed for the recruitment and deployment of the required number of final-year MD/MS/DNB and nursing students.“Verma is also authorised to recommend necessary stipend payable to the recruits,” stated the order issued by Sisodia, who is in-charge of the health department in the absence of Satyendar Jain. All recruitment will be completed in four days.",
            state: "Maharashtra",
            branch: "Mumbai",
            image: [image1],
            details: "link here",
            author: "Srushti Raybhoge",
          },
          {
            date: "4 April, 2020 09:30 AM",
            title: "Chennai: ‘Hospitals can’t deny aid to Covid patients’",
            description:
              "A letter from the director, who is also the appropriate authority under the Clinical Establishment Act, was sent to all registered hospitals in the state on Friday based on complaints the health department had received over the past few days from patients and doctors at tertiary care government hospitals.",
            state: "Maharashtra",
            branch: "Mumbai",
            image: [image1],
            details: "link here",
            author: "Srushti Raybhoge",
          },
          {
            date: "4 April, 2020 09:30 AM",
            title: "Jipmer gets 49 more MBBS seats this year",
            description:
              "Puducherry: Jawaharlal Institute of Postgraduate Medical Education and Research (Jipmer) has increased the number of MBBS seats from 200 to 249 from the academic year 2020-2021 following approval from the competent authorities. The number of seats in the institute’s Puducherry campus was increased from 150 to 187 and Karaikal campus from 50 to 62. Forty-eight of 187 seats in Puducherry campus and 16 of the 62 seats in Karaikal campus have been reserved for students from the UT. Admission into the MBBS programme will be based on Neet 2020 score. Jipmer conducted entrance examinations separately until last academic year. For more information, visit https://www.mcc.nic.in .",
            state: "Maharashtra",
            branch: "Mumbai",
            image: [image1],
            details: "link here",
            author: "Srushti Raybhoge",
          },
        ],
        "2020-05": [
          {
            date: "4 September, 2020 09:30 AM",
            title:
              "Madhya Pradesh: Cabinet clears investment promotion assistance for Oxygen plant in Babai",
            description:
              "BHOPAL: Madhya Pradesh government has decided to facilitate investment promotion assistance for establishment of Mohasa Babai Industrial and Medical Gas production plant in Hoshangabad district. A decision to this effect was taken at a meeting of the Cabinet committee for investment promotion held under the chairmanship of the chief minister Shivraj Singh Chouhan on Wednesday.The committee decided to provide an assistance at the rate of 40% for a period of 7 years to Inox Limited under the Investment Promotion Scheme.Amid shortage of medical oxygen following reluctance of other states for supply during the pandemic, state government decided to set up the plant itself in the state, with an aim of ending dependence on other states for oxygen and making medical oxygen available for Covid patients in the state. Chouhan instructed the departments concerned to expedite the proceedings in this regard.The state government has also approved the license of power distribution through MPIDC, to the Inox Air Products Pvt. Ltd. of Mohasa Babai Industrial Area, a leading manufacturer of industrial gases in the country. Making necessary facilities available to the project, it will support setting up the unit. In view of Covid-19, the process of setting up 210 tonne capacity per day air-separation plant is under way with a capital investment of Rs 125 crore to meet the oxygen demand. The setting up of the project will play an important role in the economic development and supply of oxygen in state.In the meeting, minister for industrial policy and investment promotion Rajvardhan Singh Dattigaon, minister for micro, small & medium enterprises, science & technology minister Omprakash Sakhlecha and minister for medical education, Bhopal gas tragedy, relief and rehabilitation Vishwas Sarang participated via video conferencing.",
            state: "Maharashtra",
            branch: "Pune",
            details: "link here",
            author: "Srushti Raybhoge",
            image: [image2],
          },
          {
            date: "4 September, 2020 09:30 AM",
            title:
              "Chattisgarh: Medical mobile vans to heal poor for free of cost in Raipur",
            description:
              "RAIPUR: To make medical treatment accessible to all, the district administration started medical mobile vans in the slum areas where people can avail free of cost treatment by the doctors. The services would include medical consultation by the MBBS doctor in the slum areas. pathology examination, referral-based ambulance, radiology will be provided in the government hospital for free.The state government, on the occasion of state formation day celebrated on Sunday, had announced to start about 60 mobile medical units in slum areas of 14 municipal corporations and councils of the state under Chief Minister Urban Slum Health Scheme.Raipur mayor Eijaz Dhebar said that the medical mobile vans have been started from zone seven in Chudamani ward, where large number of people availed the medical services.As per officials, the medical mobile vans units are being operated under the urban administration and development department. Its objective is to provide better medical facilities and free medicines to the people of urban slum areas regularly.",
            state: "Maharashtra",
            branch: "Pune",
            details: "link here",
            author: "Srushti Raybhoge",
            image: [image2],
          },
          {
            date: "4 April, 2020 09:30 AM",
            title: "Jipmer gets 49 more MBBS seats this year",
            description:
              "Puducherry: Jawaharlal Institute of Postgraduate Medical Education and Research (Jipmer) has increased the number of MBBS seats from 200 to 249 from the academic year 2020-2021 following approval from the competent authorities. The number of seats in the institute’s Puducherry campus was increased from 150 to 187 and Karaikal campus from 50 to 62. Forty-eight of 187 seats in Puducherry campus and 16 of the 62 seats in Karaikal campus have been reserved for students from the UT. Admission into the MBBS programme will be based on Neet 2020 score. Jipmer conducted entrance examinations separately until last academic year. For more information, visit https://www.mcc.nic.in .",
            state: "Maharashtra",
            branch: "Mumbai",
            image: [image1],
            details: "link here",
            author: "Srushti Raybhoge",
          },
          {
            date: "4 April, 2020 09:30 AM",
            title: "Jipmer gets 49 more MBBS seats this year",
            description:
              "Puducherry: Jawaharlal Institute of Postgraduate Medical Education and Research (Jipmer) has increased the number of MBBS seats from 200 to 249 from the academic year 2020-2021 following approval from the competent authorities. The number of seats in the institute’s Puducherry campus was increased from 150 to 187 and Karaikal campus from 50 to 62. Forty-eight of 187 seats in Puducherry campus and 16 of the 62 seats in Karaikal campus have been reserved for students from the UT. Admission into the MBBS programme will be based on Neet 2020 score. Jipmer conducted entrance examinations separately until last academic year. For more information, visit https://www.mcc.nic.in .",
            state: "Maharashtra",
            branch: "Mumbai",
            image: [image1],
            details: "link here",
            author: "Srushti Raybhoge",
          },
        ],
      },
      loading: true,
    };
  }
  loadData = (data) => {
    // console.log(data[0]);

    console.log(this.state);
  };
  async componentDidMount() {
    console.log('hi');
    const response = await getNews();
    if (response === null) {
      console.log("null");
    } else {
      if (response.data.status === "success") {
        console.log(response.data.data);
        this.setState({
          news: response.data.data.news,
          loading: false,
        });
        // this.loadData(response.data.data);
      } else {
      }
    }
  }
  renderNews = () => {
    let components = [];
    console.log(this.state.news);
    for (const data in this.state.news) {
      if (this.state.news[data].length === 1) {
        components.push(<OneNews data={this.state.news[data]} date={data} />);
        // return ;
      } else if (this.state.news[data].length === 2) {
        components.push(<TwoNews data={this.state.news[data]} date={data} />);
        // return <TwoNews data={this.state.news[data]} />;
      } else {
        components.push(
          <ThreeOrMore data={this.state.news[data]} date={data} />
        );
        // return <ThreeOrMore data={this.state.news[data]} />;
      }
    }

    return components;
  };
  render() {
    let components = [];
    for (const data in this.state.news) {
      if (this.state.news[data].length === 1) {
        components.push(<OneNews data={this.state.news[data]} date={data} />);
        // return ;
      } else if (this.state.news[data].length === 2) {
        components.push(<TwoNews data={this.state.news[data]} date={data} />);
        // return <TwoNews data={this.state.news[data]} />;
      } else {
        components.push(
          <ThreeOrMore data={this.state.news[data]} date={data} />
        );
        // return <ThreeOrMore data={this.state.news[data]} />;
      }
    }
    return (
      <div className="mt-md-5 ml-md-5 mr-md-5 m-2">
        {!this.state.loading && (
          <div>
            <div>
              <Trending data={this.state.trending} />
            </div>
            {
              components
              // this.renderNews
            }
            <div className="Central_footer_upcloud row">
              <p>Powered by Upcloud Technology Pvt Ltd</p>
            </div>
          </div>
        )}
        {this.state.loading && (
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Loading....
          </h1>
        )}
      </div>
    );
  }
}
