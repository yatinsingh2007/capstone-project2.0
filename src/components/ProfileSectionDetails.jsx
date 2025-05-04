import React  from 'react';
const ProfileSectionDetails = () => {
    const bachelorsDegrees = [
        "Bachelor of Arts (BA)",
        "Bachelor of Fine Arts (BFA)",
        "Bachelor of Design (BDes)",
        "Bachelor of Performing Arts (BPA)",
        "Bachelor of Journalism and Mass Communication (BJMC)",
        "Bachelor of Library Science (BLibSc)",
        "Bachelor of Fashion Design (BFD)",
        "Bachelor of Interior Design (BID)",
        "Bachelor of Science (BSc)",
        "Bachelor of Technology (BTech)",
        "Bachelor Of Technology in CS & AI",
        "Bachelor of Engineering (BE)",
        "Bachelor of Computer Applications (BCA)",
        "Bachelor of Science in Information Technology (BSc IT)",
        "Bachelor of Science in Data Science (BSc DS)",
        "Bachelor of Science in Biotechnology (BSc Biotech)",
        "Bachelor of Science in Microbiology (BSc Micro)",
        "Bachelor of Science in Environmental Science (BSc EnvSci)",
        "Bachelor of Architecture (BArch)",
        "Bachelor of Planning (BPlan)",
        "Bachelor of Business Administration (BBA)",
        "Bachelor of Commerce (BCom)",
        "Bachelor of Management Studies (BMS)",
        "Bachelor of Business Management (BBM)",
        "Bachelor of International Business and Finance (BIBF)",
        "Bachelor of Financial Markets (BFM)",
        "Bachelor of Banking and Insurance (BBI)",
        "Bachelor of Hotel Management (BHM)",
        "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
        "Bachelor of Dental Surgery (BDS)",
        "Bachelor of Physiotherapy (BPT)",
        "Bachelor of Pharmacy (BPharm)",
        "Bachelor of Occupational Therapy (BOT)",
        "Bachelor of Ayurvedic Medicine and Surgery (BAMS)",
        "Bachelor of Homeopathic Medicine and Surgery (BHMS)",
        "Bachelor of Unani Medicine and Surgery (BUMS)",
        "Bachelor of Science in Nursing (BSc Nursing)",
        "Bachelor of Veterinary Science (BVSc)",
        "Bachelor of Laws (LLB)",
        "BA LLB (Integrated)",
        "BBA LLB (Integrated)",
        "Bachelor of Social Work (BSW)",
        "Bachelor of Political Science (BA PolSci)",
        "Bachelor of Psychology (BA or BSc Psychology)",
        "Bachelor of Public Administration (BPA)",
        "Bachelor of Education (BEd)",
        "Bachelor of Elementary Education (BElEd)",
        "Bachelor of Physical Education (BPEd)"
      ].sort();
      const mastersDegree = [
        `Master of Science (MSc)`,
        `Master of Technology (MTech)`,
        `Master of Computer Applications (MCA)`,
        `Master of Business Administration (MBA)`,
        `Master of Commerce (MCom)`,
        `Master of Arts (MA)`,
        `Master of Fine Arts (MFA)`,
        `Master of Design (MDes)`,
        `Master of Architecture (MArch)`,
        `Master of Philosophy (MPhil)`,
        `Master of Social Work (MSW)`,
        `Master of Education (MEd)`,
        `Master of Physiotherapy (MPT)`,
        `Master of Pharmacy (MPharm)`,
        `Doctor of Medicine (MD)`,
        `Master of Surgery (MS)`,
        `Master of Laws (LLM)`,
        `Master of Health Administration (MHA)`,
        `Master of Science in Nursing (MSc Nursing)`,
        `Master of Science in Biotechnology (MSc Biotech)`,
        `Master of Science in Microbiology (MSc Micro)`,
        `Master of Science in Environmental Science (MSc EnvSci)`,
        `Master of Science in Data Science (MSc DS)`,
        `Master of Science in Information Technology (MSc IT)`,
        `Master of Business Management (MBM)`,
        `Master of Business Studies (MBS)`,
        `Master of International Business (MIB)`,
        `Master of Financial Management (MFM)`,
        `Master of Financial Analysis (MFA)`,
        `Master of Financial Engineering (MFE)`,
        `Master of Financial Economics (MFE)`,
        `Master of Financial Risk Management (MFRM)`,
        `Master of Financial Mathematics (MFM)`,
        `Master of Financial Planning (MFP)`,
        `Master of Financial Technology (MFT)`,
        `Master of Financial Services (MFS)`,
        `Master of Financial Accounting (MFA)`,
        `Master of Financial Management and Control (MFMC)`,
        `Master of Financial Management and Investment (MFMI)`,
        `Master of Financial Management and Strategy (MFMS)`,
        `Master of Financial Management and Analysis (MFMA)`,
        `Master of Financial Management and Risk (MFR)`,
        `Master of Financial Management and Investment Analysis (MFIA)`,
        `Master of Financial Management and Investment Strategy (MFIS)`,
        `Master of Financial Management and Investment Management (MFIM)`,
        `Master of Financial Management and Investment Banking (MFIB)`,
        `Master of Financial Management and Investment Analysis (MFIA)`,
      ].sort()
  return (
    <>
        <div className='relative flex flex-col items-center justify-center h-screen bg-white'>
            <form className='flex flex-col gap-4 w-50 p-8 md:p-20 border-2 border-gray-300 rounded-2xl shadow-lg justify-center bg-white m-2 lg:mt-48'>
                <h1 className="font-bold text-black text-2xl md:text-4xl mb-6" style={{ fontFamily: '"Lexend Zetta"' }}>
                    Profile Details
                </h1>
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="rounded-lg bg-gray-100 p-2 text-black border border-gray-300 text-center w-full" id="name" placeholder="Enter your name" required/>
                </div>
                <div className='mb-3'>
                    <div className='mb-3'>Gender</div>
                    <div className='flex gap-4'>
                        <input type = 'radio' name='gender'/>{' '}
                        <label htmlFor="gender">Male</label>{' '}
                        <input type = 'radio' name='gender'/>{' '}
                        <label htmlFor='gender'>Female</label>
                    </div>
                </div>
                <div>
                    <label>Mobile</label>
                    <input type='text' minLength={10} min={0} className='rounded-lg bg-gray-100 p-2 text-black border border-gray-300 text-center w-full' placeholder='Enter Your Mobile Number'/>
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor='masterEducation'>Master's Education{' '}<span className='text-sm text-gray-500'>(optional)</span></label>
                    <select className="rounded-lg bg-gray-100 p-2 text-black border border-gray-300 text-center w-full" id="masterEducation">
                        <option value="" disabled selected>Select your degree</option>
                        {mastersDegree.map((degree, index) => (
                            <option key={index} value={degree}>{degree}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor='education'>Bachelor's Education</label>
                    <select className="rounded-lg bg-gray-100 p-2 text-black border border-gray-300 text-center w-full" id="education" required>
                        <option value="" disabled selected>Select your degree</option>
                        {bachelorsDegrees.map((degree, index) => (
                            <option key={index} value={degree}>{degree}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="college">College/University</label>
                    <input type="text" className="rounded-lg bg-gray-100 p-2 text-black border border-gray-300 text-center w-full" id="college" placeholder="Enter your college/university name" required/>
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="graduationYear">Graduation Year</label>
                    <input type="number" className="rounded-lg bg-gray-100 p-2 text-black border border-gray-300 text-center w-full" id="graduationYear" placeholder="Enter your graduation year" required maxLength={4} min={1980}/>
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="location">Location</label>
                    <input type="text" className="rounded-lg bg-gray-100 p-2 text-black border border-gray-300 text-center w-full" id="location" placeholder="Enter your City Name" required/>
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea className="rounded-lg bg-gray-100 p-2 text-black border border-gray-300 text-center w-full" id="bio" placeholder="Enter your bio" required></textarea>
                </div>
            </form>
        </div>
    </>
  )
}

export default ProfileSectionDetails
