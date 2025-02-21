'use client'

import { useState } from 'react'
import { useTranslation } from '@/i18n/client'
import React from 'react'
import { Language } from '@/i18n/settings'

export default function DeviceGrid({ lng }: { lng: Language }) {
  const { t } = useTranslation(lng, 'device-grid')

  const [selectedDevice, setSelectedDevice] = useState<number | null>(null)

  const devices = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Device ${i + 1}`,
    status: Math.random() > 0.8 ? 'Error' : 'Normal',
  }))

  const handleDeviceClick = (id: number) => {
    setSelectedDevice(id === selectedDevice ? null : id)
  }

  return (
    <div className="grid grid-cols-5 gap-4">
      {devices.map((device) => (
        <div
          key={device.id}
          className={`cursor-pointer rounded-lg border p-4 ${
            device.status === 'Error' ? 'border-red-500' : 'border-green-500'
          } ${selectedDevice === device.id ? 'col-span-2 row-span-2' : ''}`}
          onClick={() => handleDeviceClick(device.id)}
        >
          <h3 className="text-lg font-semibold">{device.name}</h3>
          <p className={device.status === 'Error' ? 'text-red-500' : 'text-green-500'}>
            {device.status}
          </p>
          {selectedDevice === device.id && (
            <div className="mt-4">
              <p>{t('go-here')}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
